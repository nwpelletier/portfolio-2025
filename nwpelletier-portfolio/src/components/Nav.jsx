import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "tab active" : "tab")}
      >
        projects
      </NavLink>
    </div>
  );
};

export default Nav;
