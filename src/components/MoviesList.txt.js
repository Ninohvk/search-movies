import { Movie } from "./Movie";

export const MoviesList = ({ movies }) => (
  <div className="MoviesList">
    {movies.map((movie) => (
      <div className="MoviesList-item" key={movie.imdbID}>
        <Movie
          id={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        >
          {movie.Title}
        </Movie>
      </div>
    ))}
  </div>
);
