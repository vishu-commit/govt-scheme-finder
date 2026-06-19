import { Link, NavLink } from "react-router-dom";
import { FaLandmark, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaLandmark className="text-white text-3xl" />
          <h1 className="text-white text-2xl font-bold">
            Govt Scheme Finder
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/schemes"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            Schemes
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            About
          </NavLink>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-emerald-800 flex flex-col items-center py-4 space-y-4">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/schemes"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Schemes
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            Favorites
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-yellow-300"
          >
            About
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;