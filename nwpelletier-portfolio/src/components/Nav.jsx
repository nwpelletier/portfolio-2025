import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        Home
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        Resume
      </NavLink>
      <NavLink
        to="/work"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        Work
      </NavLink>
    </div>
  );
};

export default Nav;
