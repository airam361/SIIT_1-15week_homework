import classes from "./Episode.module.css";

const Episode = (props) => {
  const getCharactersHandler = () => {
    props.setActiveEpisodeHandler(props.episode);
    props.toggleExpand();
  };

  return (
    <li
      className={`${classes.episode} ${
        props.active ? classes["active-episode"] : ""
      }`}
    >
      <div className={classes.control}>
        <label>Episode name:</label>
        <output>{props.name}</output>
      </div>
      <div className={classes.control}>
        <label>Air date:</label>
        <output>{props.air_date}</output>
      </div>
      <div className={classes.control}>
        <label>Episode:</label>
        <output>{props.episode}</output>
      </div>
      <div className={classes.control}>
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
