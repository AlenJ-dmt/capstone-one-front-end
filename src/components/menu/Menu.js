import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Menu = () => {
  return (
    <nav id="menu">
      <Link onClick className="link" to="/search">
        <i className="material-icons">search</i>
        <span>Search</span>
      </Link>

      <Link className="link" to="/post">
        <i className="material-icons">add</i>
        <span>Add</span>
      </Link>
    </nav>
  );
};

export default Menu;
