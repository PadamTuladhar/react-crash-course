import { useState } from "react";
import MovieCard from "../MovieCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const movies = [
    { id: 1, title: "ABC", releaseDate: "2000", url: "" },
    { id: 2, title: "xyz", releaseDate: "2001", url: "" },
    { id: 3, title: "def", releaseDate: "1111", url: "" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchQuery, "padam");
    setSearchQuery("");
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
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
