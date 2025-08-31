import "./css/MovieCard.css";

interface Movie {
  Images: string;
  title: string;
  releaseDate: string;
  Title: string;
  releasedDate: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  function handleClick() {}
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Images} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleClick}>
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
