import { useContext, useState } from "react";

import Header from "./components/Header";
import Container from "./components/UI/Container";
import EpisodesList from "./components/Episodes/EpisodesList";
import CharactersList from "./components/Characters/CharactersList";
import MobileEpisodesContext from "./store/mobile-episodes-context";

function App() {
  const [activeEpisode, setActiveEpisode] = useState("");
  const mobileCtx = useContext(MobileEpisodesContext);

  const setActiveEpisodeHandler = (episode) => {
    setActiveEpisode(episode);
  };

  return (
    <>
      <Header />
      <Container className={`${"container-left"} ${mobileCtx.expandClass}`}>
        <EpisodesList
          activeEpisode={activeEpisode}
          setActiveEpisodeHandler={setActiveEpisodeHandler}
        />
      </Container>
      <Container className={"container-rigth"}>
        <CharactersList activeEpisode={activeEpisode} />
      </Container>
    </>
  );
}

export default App;
