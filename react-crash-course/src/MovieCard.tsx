import "./css/MovieCard.css";
import axios from "axios";

interface Movie {
  url: string;
  title: string;
  releaseDate: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  function handleClick() {
    console.log("I m clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}
