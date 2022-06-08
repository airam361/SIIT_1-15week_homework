import classes from "./MobileEpisodesList.module.css";

const MobileEpisodesList = (props) => {
  return (
    <button className={classes["mobile-episodes"]} onClick={props.toggleExpand}>
      {/* {props.expand && <h3>View Characters</h3>}
      {!props.expand && <h3>View Episodes</h3>} */}
      <h3>{props.expand ? "View Characters" : "View Episodes"}</h3>
    </button>
  );
};

export default MobileEpisodesList;
