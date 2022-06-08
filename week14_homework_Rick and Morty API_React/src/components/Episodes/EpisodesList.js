import { useState, useEffect } from "react";
import { getEpisodes } from "../../lib/httpRequests";

import Episode from "../Episodes/Episode";
import LoadingSpinner from "../UI/LoadingSpinner";
import Pagination from "../Pagination";
import MobileEpisodesList from "./MobileEpisodesList";

const EpisodesList = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const refreshEpisodes = (pageNo) => {
    setIsLoading(true);
    getEpisodes(pageNo).then((dataArr) => {
      setEpisodes(dataArr[0]);
      setTotalPages(dataArr[1]);
      setIsLoading(false);
    });
  };

  const switchPage = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    refreshEpisodes(currentPage);
  }, [currentPage]);

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
                toggleExpand={props.toggleExpand}
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

      {/* ------------------------------- for Mobile  ------------ */}
      <MobileEpisodesList
        toggleExpand={props.toggleExpand}
        expand={props.expand}
      />
    </>
  );
};

export default EpisodesList;
