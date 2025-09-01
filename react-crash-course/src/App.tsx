import "./App.css";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
