import React, { useState } from "react";

const EpisodesContext = React.createContext({
  activeEpisode: "",
});

export const EpisodesContextProvider = (props) => {
  const [activeEpisode, setActiveEpisode] = useState("");

  return (
    <EpisodesContext.Provider
      value={{
        activeEpisode: activeEpisode,
      }}
    >
      {props.children}
    </EpisodesContext.Provider>
  );
};

export default EpisodesContext;
