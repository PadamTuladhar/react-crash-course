import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../MovieCard";

export default function Favourites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>Nothing here yet</h2>
      <p>Start adding movies to your favorites list</p>
    </div>
  );
}
