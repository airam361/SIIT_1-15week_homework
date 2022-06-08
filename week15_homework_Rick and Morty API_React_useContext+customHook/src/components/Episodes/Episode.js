import { useContext } from "react";
import MobileEpisodesContext from "../../store/mobile-episodes-context";
import classes from "./Episode.module.css";

const Episode = (props) => {
  const mobileCtx = useContext(MobileEpisodesContext);

  const getCharactersHandler = () => {
    props.setActiveEpisodeHandler(props.episode);
    mobileCtx.toggleExpand();
  };

  const { control, episode} = classes;

  return (
    <li
      className={`${episode} ${
        props.active ? classes["active-episode"] : ""
      }`}
    >
      <div className={control}>
        <label>Episode name:</label>
        <output>{props.name}</output>
      </div>
      <div className={control}>
        <label>Air date:</label>
        <output>{props.air_date}</output>
      </div>
      <div className={control}>
        <label>Episode:</label>
        <output>{props.episode}</output>
      </div>
      <div className={control}>
        <label>Characters:</label>
        <button
          type="button"
          disabled={props.active}
          className={props.active ? classes["button-active"] : ""}
          onClick={getCharactersHandler}
        >
          View <span>{props.charactersNo}</span> characters
        </button>
      </div>
    </li>
  );
};

export default Episode;
