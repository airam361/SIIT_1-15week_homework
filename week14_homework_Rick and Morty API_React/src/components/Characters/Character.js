import { useEffect, useState } from "react";

import CharacterStatus from "./CharacterStatus";
import { getCharacter } from "../../lib/httpRequests";

import classes from "./Character.module.css";

const Character = (props) => {
  const [character, setCharacter] = useState({});

  const refreshCharacters = (link) => {
    getCharacter(link).then((data) => {
      setCharacter(data);
    });
  };

  useEffect(() => {
    refreshCharacters(props.characterLink);
  }, [props.characterLink]);

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
