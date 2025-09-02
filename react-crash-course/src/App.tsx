import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { MovieProvider } from "./context/MovieContext";
import { lazy, Suspense } from "react";

function App() {
  const FavoriteComponent = lazy(() => import("./Pages/Favourites"));
  const HomeComponent = lazy(() => import("./Pages/Home"));
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/favorites" element={<FavoriteComponent />} />
          </Routes>
        </Suspense>
      </main>
    </MovieProvider>
  );
}

export default App;
