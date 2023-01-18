import { useState } from "react";
import moviesFromJson from "./data/movies.json";

import { Header } from "./component/Header";
import { Main } from "./component/Main";
import { Footer } from "./component/Footer";

import "./App.css";

function App() {
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");

  const deleteMovie = (idOfTheMovieToDelete) => {
    //calculat the new list of movies
    const newListOfMovies = moviesArr.filter((movie) => {
      // whenever I am deleting a movie, that movie equals to the particular id, so that it won't show up in the new array
      return movie.id !== idOfTheMovieToDelete;
    });

    //update state
    setMoviesArr(newListOfMovies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL,
    };

    //update list of movies
    setMoviesArr((prevListOfMovies) => {
      const newList = [newMovie, ...prevListOfMovies];
      return newList;
    });

    //clear form
    setTitle("");
    setRating("");
    setImgURL("");
  };

  const [isAscending, setIsAscending] = useState(true);

  const sortByDeRating = () => {
    const ratingOrder = [...moviesArr].sort((a, b) => b.rating - a.rating);
    setMoviesArr(ratingOrder);
  };

  const sortByARating = () => {
    const ratingOrder = [...moviesArr].sort((a, b) => a.rating - b.rating);
    setMoviesArr(ratingOrder);
  };

  const sortMovies = () => {
    if (isAscending) {
      sortByARating();
    } else {
      sortByDeRating();
    }
    setIsAscending(!isAscending);
  };

  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            required={true}
            placeholder="enter the title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            required={true}
            min="1"
            max="10"
            placeholder="5"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>

        <label>
          Image URL:
          <input
            type="url"
            name="imgURL"
            placeholder="image url"
            value={imgURL}
            onChange={(e) => {
              setImgURL(e.target.value);
            }}
          />
        </label>

        <button>Create</button>
      </form>

      <Main
        moviesArr={moviesArr}
        deleteMovie={deleteMovie}
        sortMovies={sortMovies}
        sortByDeRating={sortByDeRating}
        sortByARating={sortByARating}
        isAscending={isAscending}
      />
      <Footer />
    </div>
  );
}

export default App;
