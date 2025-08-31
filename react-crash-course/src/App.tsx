import "./App.css";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
