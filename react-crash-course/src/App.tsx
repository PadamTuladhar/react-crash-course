import "./App.css";
import Navbar from "./Navbar";
import { MovieProvider } from "./context/MovieContext";
import { lazy, Suspense, useState } from "react";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const FavoriteComponent = lazy(() => import("./Pages/Favourites"));
  const HomeComponent = lazy(() => import("./Pages/Home"));

  return (
    <MovieProvider>
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          {currentView === "home" && <HomeComponent />}
          {currentView === "favorites" && <FavoriteComponent />}
        </Suspense>
        {/* Route method:
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/favorites" element={<FavoriteComponent />} />
          </Routes>
        </Suspense>
        */}
      </main>
    </MovieProvider>
  );
}

export default App;
