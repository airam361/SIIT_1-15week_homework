import { useState } from "react";

import Header from "./components/Header";
import Container from "./components/UI/Container";
import EpisodesList from "./components/Episodes/EpisodesList";
import CharactersList from "./components/Characters/CharactersList";

function App() {
  const [activeEpisode, setActiveEpisode] = useState();
  const [expandClass, setExpandClass] = useState("");
  const [expand, setExpand] = useState(false);

  const setActiveEpisodeHandler = (episode) => {
    setActiveEpisode(episode);
  };

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
    <>
      <Header />
      <Container className={`${"container-left"} ${expandClass}`}>
        <EpisodesList
          activeEpisode={activeEpisode}
          setActiveEpisodeHandler={setActiveEpisodeHandler}
          toggleExpand={toggleExpand}
          expand={expand}
        />
      </Container>
      <Container className={"container-rigth"}>
        <CharactersList activeEpisode={activeEpisode} />
      </Container>
    </>
  );
}

export default App;
