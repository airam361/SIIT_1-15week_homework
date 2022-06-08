import { useContext } from "react";

import MobileEpisodesContext from "../../store/mobile-episodes-context";

import classes from "./MobileEpisodesList.module.css";

const MobileEpisodesList = () => {
  const mobileCtx = useContext(MobileEpisodesContext);

  return (
    <button
      className={classes["mobile-episodes"]}
      onClick={mobileCtx.toggleExpand}
    >
      {/* {mobileCtx.expand && <h3>View Characters</h3>}
      {!mobileCtx.expand && <h3>View Episodes</h3>} */}
      <h3>{mobileCtx.expand ? "View Characters" : "View Episodes"}</h3>
    </button>
  );
};

export default MobileEpisodesList;
