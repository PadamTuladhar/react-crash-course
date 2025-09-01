import "./css/MovieCard.css";
import { useMovieContext } from "./context/MovieContext";

interface Movie {
  Images: string;
  title: string;
  Title: string;
  releasedDate: string;
  imdbID: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, removeFromFavorites, addToFavorites } = useMovieContext();

  const favorite = isFavorite(movie.imdbID);

  function handleClick(e: any) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.imdbID);
      return;
    }
    addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Images} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 style={{ color: "white" }}>{movie.Title}</h3>
        <p>{movie.releasedDate}</p>
      </div>
    </div>
  );
}
