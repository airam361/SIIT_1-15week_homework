import { useState, useEffect, useCallback } from "react";

import Episode from "../Episodes/Episode";
import LoadingSpinner from "../UI/LoadingSpinner";
import Pagination from "../Pagination";
import MobileEpisodesList from "./MobileEpisodesList";

import useHttp from "../../hooks/use-http";
import config from "../../config";

const EpisodesList = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const setEpisodesData = useCallback((dataArr) => {
    setEpisodes(dataArr["results"]);
    setTotalPages(dataArr["info"]["pages"]);
  }, []);

  const { isLoading, sendRequest: getEpisodes } = useHttp(setEpisodesData);

  const switchPage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    getEpisodes({
      link: config.api.episodesAPI,
      errorMessage: "Could not get Episodes!",
      urlParams: [{ property: "page", value: currentPage, required: true }],
    });
  }, [currentPage, getEpisodes]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <ul className="episodes-list">
            {episodes.map((episode) => (
              <Episode
                key={episode.id}
                episode={episode.episode}
                name={episode.name}
                air_date={episode.air_date}
                charactersNo={episode.characters.length}
                setActiveEpisodeHandler={props.setActiveEpisodeHandler}
                active={props.activeEpisode === episode.episode}
              />
            ))}
          </ul>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            switchPage={switchPage}
          />
        </>
      )}

      {/* ------------- for Mobile  ------------ */}
      <MobileEpisodesList />
    </>
  );
};

export default EpisodesList;
