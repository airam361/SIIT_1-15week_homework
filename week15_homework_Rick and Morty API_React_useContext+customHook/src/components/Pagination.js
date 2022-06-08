import { useEffect, useState } from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const [totalPages, setTotalPages] = useState(0);
  let prev = "";
  let next = "";

  useEffect(() => {
    setTotalPages(props.totalPages);
  }, []);

  const switchPageHandler = (event) => {
    props.switchPage(Number(event.target.innerText));
  };

  const nextPageHandler = () => {
    props.switchPage(props.currentPage + 1);
  };

  const prevPageHandler = () => {
    props.switchPage(props.currentPage - 1);
  };

  const activePage = (page) => {
    if (page === props.currentPage) {
      return "active-page";
    }
  };

  if (props.currentPage === 1) {
    prev = (
      <span  className={classes.hide}>
        &laquo;
      </span>
    );
  } else {
    prev = (
      <span  onClick={prevPageHandler}>
        &laquo;
      </span>
    );
  }

  if (props.currentPage === totalPages) {
    next = (
      <span  className={classes.hide}>
        &raquo;
      </span>
    );
  } else {
    next = (
      <span  onClick={nextPageHandler}>
        &raquo;
      </span>
    );
  }

  return (
    <div className={classes.pagination}>
      {prev}
      {[...Array(totalPages)].map((item, index) => (
        <span
          key={index + 1}
          className={classes[activePage(index + 1)]}
          onClick={switchPageHandler}
        >
          {index + 1}
        </span>
      ))}
      {next}
    </div>
  );
};

export default Pagination;
