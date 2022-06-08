import classes from "./CharacterStatus.module.css";

const CharacterStatus = (props) => {
  return (
    <span
      className={`${classes["status-icon"]} ${classes[props.status?.toLowerCase()]}`}
    ></span>
  );
};

export default CharacterStatus;
