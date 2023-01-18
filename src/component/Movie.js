import "./Movie.css";

const Movie = ({ movieDetails, deleteMovie }) => {
  return (
    <div key={movieDetails.id} className="Main card badge">
      <h2>{movieDetails.title}</h2>
      <h4>{movieDetails.year}</h4>

      {movieDetails.genres.map((genres) => {
        return <p key={genres}>{genres}</p>;
      })}

      <h5>{movieDetails.rating}</h5>

      {/* conditional rendering  */}
      {movieDetails.imgURL ? (
        <img src={movieDetails.imgURL} alt="" />
      ) : (
        <img src="https://via.placeholder.com/182x268" alt="placeholder" />
      )}

      {/* If the rating is above 8, the movie will say RECOMMENDED */}
      {movieDetails.rating > 8 && <p className="recom">RECOMMENDED</p>}
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
};

export { Movie };
