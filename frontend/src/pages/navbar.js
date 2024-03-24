import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import NavlinkRoutes from "../routes/navbarlink";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="../img" alt="Logo" />
      </div>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/ResortCities">Resort Cities</Link>
        <Link to="/Business">For Business</Link>
        <Link to="/Resources">Resources</Link>
        <Link to="/getstarted"> Getstarted</Link>
      </div>
    </nav>
  );
};

export default Navbar;