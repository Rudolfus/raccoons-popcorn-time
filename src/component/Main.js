import "./Main.css";

import { Movie } from "./Movie";

const Main = ({
  moviesArr,
  sortMovies,
  setMoviesArr,
  sortByDeRating,
  sortByARating,
  isAscending,
}) => {
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

      <button onClick={sortByDeRating}>Sort by descending rating</button>
      <button onClick={sortByARating}>Sort by ascending rating</button>
      <button onClick={sortMovies}>
        Sort movies {isAscending ? "ascending" : "descending"}
      </button>

      {moviesArr.map((movieDetails) => {
        // whenever I am mapping, include a key with a unique id
        // for each movie in the array, display the component Movie
        return (
          <Movie
            key={movieDetails.id}
            movieDetails={movieDetails}
            // to be able to use the delete button, we pass the useState function through this prop
            // to the component Movie
            setMoviesArr={setMoviesArr}
            moviesArr={moviesArr}
          />
        );
      })}
    </div>
  );
};

export { Main };
