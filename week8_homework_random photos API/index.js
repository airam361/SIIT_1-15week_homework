const selectDictionary = {
  dog: {
    type: "dog",
    link: "https://random.dog/woof.json",
    photoSrcProp: "url",
  },
  cat: {
    type: "cat",
    link: "https://api.thecatapi.com/v1/images/search",
    photoSrcProp: "url",
  },
  fox: {
    type: "fox",
    link: "https://randomfox.ca/floof/",
    photoSrcProp: "image",
  },
};

const select = document.querySelector("select");
const btnPhotoSrcProp = document.querySelector("button");
const img = document.querySelector("img");
const video = document.querySelector("video");
const loadingSpinner = document.querySelector(".lds-dual-ring");

const getExtension = (str) => {
  return str.split(".").reverse()[0];
};

const clickPhotoSrcPropHandler = () => {
  let extension = "";
  let src = "";
  const selectedAnimalPhoto = select.value;
  img.style.display = "none";
  video.style.display = "none";
  loadingSpinner.style.display = "block";

  fetch(selectDictionary[selectedAnimalPhoto].link, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loadingSpinner.style.display = "none";
      if (Array.isArray(data)) {
        data = data[0];
      }
      src = data[selectDictionary[selectedAnimalPhoto]["photoSrcProp"]];
      switch (selectedAnimalPhoto) {
        case "cat":
        case "fox":
          img.src = src;
          img.style.display = "block";
          break;
        case "dog":
          extension = getExtension(src).toLowerCase();
          if (extension === "mp4" || extension === "webm") {
            video.src = src;
            video.style.display = "block";
          } else {
            img.src = src;
            img.style.display = "block";
          }
          break;
      }
    });
};

// function decide(data, animal) {
//   if (Array.isArray(data)) {
//     data = data[0];
//   }
//   const objectUrlProp = selectDictionary[animal]["photoSrcProp"];
//   let src = data[objectUrlProp];
//   let extension = getExtension(src);
//   if (["mp4", "webm"].indexOf(extension) > -1) {
//     video.src = src;
//     video.style.display = "block";
//   } else {
//     img.src = src;
//     img.style.display = "block";
//   }
// }

const createSelect = (obj) => {
  let option = "";
  for (const key in obj) {
    option = document.createElement("option");
    option.value = obj[key].type;
    option.innerText = obj[key].type;
    select.appendChild(option);
  }
};

const onWindowLoad = () => {
  createSelect(selectDictionary);
  btnPhotoSrcProp.addEventListener("click", clickPhotoSrcPropHandler);
};

window.addEventListener("load", onWindowLoad);
