import React, { useState } from "react";

const MobileEpisodesContext = React.createContext({
  expand: false,
  expandClass: "",
  toggleExpand: () => {},
});

export const MobileEpisodesContextProvider = (props) => {
  const [expandClass, setExpandClass] = useState("");
  const [expand, setExpand] = useState(false);

  const revertExpaned = (oldVal) => {
    const newVal = !oldVal;
    if (newVal) {
      setExpandClass("expand");
    } else {
      setExpandClass("");
    }
    return newVal;
  };

  const toggleExpand = () => {
    setExpand(revertExpaned);
  };

  return (
    <MobileEpisodesContext.Provider
      value={{
        expand: expand,
        expandClass: expandClass,
        toggleExpand: toggleExpand,
      }}
    >
      {props.children}
    </MobileEpisodesContext.Provider>
  );
};

export default MobileEpisodesContext;
