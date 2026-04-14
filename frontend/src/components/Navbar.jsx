import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          Resume Analyzer
        </Link>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Signup
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Login
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
