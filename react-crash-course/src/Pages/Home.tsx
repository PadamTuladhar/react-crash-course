import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "../css/Home.css";
import axios from "axios";

interface Movie {
  Images: string;
  title: string;
  releaseDate: string;
  Title: string;
  releasedDate: string;
  imdbID: string;
  [key: string]: any;
}

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/src/assets/Mock-data/movies.json");
        setMovies(response.data.movies);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const filteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMovies(filteredMovies);
  };
  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie, idx) => (
            <MovieCard movie={movie} key={idx} />
          )
          // movie.Title.toLowerCase().includes(searchQuery) && (
          // )
        )}
      </div>
    </div>
  );
}

export default Home;
