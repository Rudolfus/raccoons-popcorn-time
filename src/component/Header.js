import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <h1>Current number of movies: {props.numberOfMovies}</h1>
    </div>
  );
};

export { Header };
