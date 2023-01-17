import { useState } from "react";
import "./Main.css";
import moviesFromJson from "../data/movies.json";

const Main = () => {
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (idOfTheMovieToDelete) => {
    const newListOfMovies = moviesArr.filter((movie) => {
      // whenever I am deleting a movie, that movie equals to the particular id, so that it won't show up in the new array
      return movie.id !== idOfTheMovieToDelete;
    });

    setMoviesArr(newListOfMovies);
  };

  // Conditional Rendering with "Element Variables"
  let titleMessage;
  if (moviesArr.length > 0) {
    titleMessage = <h2>Current number of movies: {moviesArr.length}</h2>;
  } else {
    titleMessage = (
      <h2>You have deleted all the movies, what is wrong with you?</h2>
    );
  }
  //   const titleMessage = "Current Number of movies: {moviesArr.length}"
  //   const noMovieMessage = "You have deleted all the movies, what is wrong with you?"

  return (
    <div className="Main">
      {titleMessage}

      {moviesArr.map((movieDetails) => {
        return (
          <div key={movieDetails.id} className="Main card badge">
            <p>{movieDetails.title}</p>
            <p>{movieDetails.year}</p>
            <p>{movieDetails.genres}</p>

            {/* conditional rendering  */}
            {movieDetails.imgURL ? (
              <img src={movieDetails.imgURL} alt="" />
            ) : (
              <img
                src="https://via.placeholder.com/182x268"
                alt="placeholder"
              />
            )}

            {/* If the rating is above 8, the movie will say RECOMMENDED */}
            {movieDetails.rating > 8 && <p>RECOMMENDED</p>}
            <hr />
            <button
              onClick={() => {
                deleteMovie(movieDetails.id);
              }}
            >
              Delete this movie
            </button>
          </div>
        );
      })}
    </div>
  );
};

export { Main };
