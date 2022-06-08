const link = "https://rickandmortyapi.com/api/episode";

export const getEpisodes = (noPage = 1) => {
  return fetch(link + `?page=${noPage}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return [data["results"], data["info"]["pages"]];
    });
};

export const getCharactersPerEpisode = (episodeId) => {
  return fetch(link + `?episode=${episodeId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data["results"][0]["characters"];
    });
};

export const getCharacter = (link) => {
  return fetch(link, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
