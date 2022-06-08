import {
  getEpisodes,
  getCharactersPerEpisode,
  getCharacter,
} from "./httpRequests.js";

let state = {
  currentPage: 1,
  currentEpisode: "",
};

let episodesList = document.querySelector(".episodes-list");
let charactersList = document.querySelector(".characters-list");
let svgContainer = document.querySelector(".svg-container");
let loading = document.querySelector(".loading-container");
let pagination = document.querySelector(".pagination");

let containerLeft = document.querySelector(".container-left");
let mobileEpisodesBtn = document.querySelector(".mobile-episodes");
let mobileEpisodesBtnDescript = document.querySelector(".mobile-episodes h3");

// Helpers
const getEpisodeId = (element) => {
  return element.getAttribute("episode");
};

const toggleActiveEpisode = (episodeId) => {
  if (state.currentEpisode !== "") {
    let liParentPrev = document.querySelector(
      `li[episode=${state.currentEpisode}]`
    );
    let btnEpisodePrev = document.querySelector(
      `button[episode=${state.currentEpisode}]`
    );
    liParentPrev.classList.remove("active-episode");
    btnEpisodePrev.removeAttribute("disabled", "");
    btnEpisodePrev.classList.remove("button-active");
  }
  state.currentEpisode = getEpisodeId(episodeId);

  let liParentCurrent = document.querySelector(
    `li[episode=${state.currentEpisode}]`
  );
  let btnEpisodeCurrent = document.querySelector(
    `button[episode=${state.currentEpisode}]`
  );
  liParentCurrent.classList.add("active-episode");
  btnEpisodeCurrent.setAttribute("disabled", "");
  btnEpisodeCurrent.classList.add("button-active");
};

const setStatusIconColor = (character) => {
  let statusIcon = document.querySelector(
    `#character_${character.id} span.status-icon`
  );
  switch (character.status.toLowerCase()) {
    case "alive":
      statusIcon.style.backgroundColor = "#55cc44";
      break;
    case "dead":
      statusIcon.style.backgroundColor = "#ff0000";
      break;
    case "unknown":
      statusIcon.style.backgroundColor = "#808080";
      break;
  }
};

const toggleSvg = (show) => {
  if (show) {
    svgContainer.style.display = "block";
    charactersList.style.display = "none";
  } else {
    svgContainer.style.display = "none";
    charactersList.style.display = "flex";
  }
};

const toggleMobileEpisodes = (show) => {
  if (show) {
    containerLeft.classList.add("expand");
    mobileEpisodesBtnDescript.innerText = "View Characters";
  } else {
    containerLeft.classList.remove("expand");

    mobileEpisodesBtnDescript.innerText = "View Episodes";
  }
};

// Templates
const createEpisodeTemplate = (item) => {
  return `
   <li class="episode" episode="${item["episode"]}">
    <div class="control">
      <label>Episode name:</label>      
      <output>${item["name"]}</output>
    </div>
    <div class="control">
      <label>Air date:</label>
      <output>${item["air_date"]}</output>
    </div>
    <div class="control">
      <label>Episode:</label>
      <output>${item["episode"]}</output>
    </div>
    <div class="control">
      <label>Characters:</label>
      <button type="button" episode="${item["episode"]}">View <span>${item["characters"].length}</span> characters</button>
    </div>
  </li>
  `;
};

const createPaginationTemplate = (totalPages) => {
  let template = "";
  if (state.currentPage === 1) {
    template = '<a href="#" rel="prev" style="visibility:hidden">&laquo;</a>';
  } else {
    template = `<a href="#" rel="prev" page="${
      state.currentPage - 1
    }">&laquo;</a>`;
  }
  for (let i = 1; i <= totalPages; i++) {
    template += `<a class="${
      state.currentPage === i ? "active-page" : ""
    }" href="#" page="${i}">${i}</a>`;
  }
  if (state.currentPage === totalPages) {
    template += '<a href="#" rel="next" style="visibility:hidden">&raquo;</a>';
  } else {
    template += `<a href="#" rel="next" page="${
      state.currentPage + 1
    }">&raquo;</a>`;
  }
  return template;
};

const createCharacterTemplate = (item) => {
  // <li class="character" id=character_${item.id}>
  return `<div class="character-img">
      <img
        src="${item.image}"
        alt="${item.name}"
      />
    </div>
    <div class="character-content">
      <div class="section">
        <h4>${item.name}</h4>
        <output class="status">
          <span class="status-icon"></span>
          ${item.status} - ${item.species}
        </output>
      </div>
      <div class="section">
        <label>Gender:</label>
        <output>${item.gender}</output>
      </div>
      <div class="section">
        <label>Last known location:</label>
        <output>${item.location.name}</output>
      </div>
    </div>`;
  // </li>;
};

// Events creators
const createGetCharactersEvents = () => {
  let btnGetCharacters = document.querySelectorAll(".control > button");
  btnGetCharacters.forEach((item) =>
    item.addEventListener("click", displayCharacters)
  );
};

const createPaginationEvents = () => {
  let pages = document.querySelectorAll(".pagination a");
  pages.forEach((item) => item.addEventListener("click", pageHandler));
};

// Helper for Event Handler
const displayCharacter = (charactLink) => {
  const li = document.createElement("li");
  getCharacter(charactLink).then((characterData) => {
    li.innerHTML = createCharacterTemplate(characterData);
    li.classList.add("character");
    li.setAttribute("id", "character_" + characterData.id);
    charactersList.appendChild(li);
    setStatusIconColor(characterData);
  });
};

// Event Handlers
const displayCharacters = (event) => {
  toggleActiveEpisode(event.currentTarget);
  toggleSvg(false);
  toggleMobileEpisodes(false);

  charactersList.innerHTML = "";

  getCharactersPerEpisode(state.currentEpisode).then((data) => {
    for (let i = 0; i < data.length; i++) {
      displayCharacter(data[i]);
    }
  });
};

const pageHandler = (event) => {
  if (state.currentPage === Number(event.currentTarget.getAttribute("page"))) {
    return;
  }
  state.currentPage = Number(event.currentTarget.getAttribute("page"));
  state.currentEpisode = "";
  charactersList.innerHTML = "";
  toggleSvg(true);
  displayEpisodes(state.currentPage);
};

const displayEpisodes = (page) => {
  loading.style.display = "block";
  getEpisodes(page).then((dataArr) => {
    loading.style.display = "none";
    episodesList.innerHTML = "";
    dataArr[0].forEach(
      (item) => (episodesList.innerHTML += createEpisodeTemplate(item))
    );
    createGetCharactersEvents();
    pagination.innerHTML = createPaginationTemplate(dataArr[1]);
    createPaginationEvents();
  });
};

// Events
let isExpanded = false;
mobileEpisodesBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;
  toggleMobileEpisodes(isExpanded);
});

window.addEventListener("load", displayEpisodes);
