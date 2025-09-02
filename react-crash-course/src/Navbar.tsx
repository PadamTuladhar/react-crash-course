import "./css/Navbar.css";
// import { Link } from "react-router-dom";

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Movie app</span>
        {/* <Link to="/">Movie app</Link> */}
      </div>
      <div className="navbar-links">
        <button
          onClick={() => setCurrentView("home")}
          className={`nav-link ${currentView === "home" ? "active" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentView("favorites")}
          className={`nav-link ${currentView === "favorites" ? "active" : ""}`}
        >
          Favorites
        </button>
        {/* Route method:
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        */}
      </div>
    </nav>
  );
}
