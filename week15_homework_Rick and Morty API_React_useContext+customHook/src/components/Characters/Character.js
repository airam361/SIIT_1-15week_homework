import { useCallback, useEffect, useState } from "react";

import CharacterStatus from "./CharacterStatus";

import useHttp from "../../hooks/use-http";

import classes from "./Character.module.css";

const Character = (props) => {
  const [character, setCharacter] = useState({});

  // const setCharacterData = useCallback((data) => {
  //   setCharacter(data);
  // }, []);

  const { sendRequest: getCharacter } = useHttp(setCharacter);

  useEffect(() => {
    getCharacter({
      link: props.characterLink,
      errorMessage: "Could not get Character!",
    });
  }, [props.characterLink, getCharacter]);

  return (
    <li className={classes.character}>
      <div className={classes["character-img"]}>
        <img src={character.image || ""} alt={character.name} />
      </div>
      <div className={classes["character-content"]}>
        <div className={classes.section}>
          <h4>{character.name}</h4>
          <output className={classes.status}>
            <CharacterStatus status={character.status} />
            {character.status} - {character.species}
          </output>
        </div>
        <div className={classes.section}>
          <label>Gender:</label>
          <output>{character.gender}</output>
        </div>
        <div className={classes.section}>
          <label>Last known location:</label>
          <output>{character.location?.name}</output>
        </div>
      </div>
    </li>
  );
};

export default Character;
