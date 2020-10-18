import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./nav.css";

const Menu = () => {
  const [active, setActive] = useState("");
  const url = useHistory();

  return (
    <nav
      id="menu"
      style={{ display: url.location.pathname === "/" ? "none" : "flex" }}
    >
      <Link
        onClick={() => setActive("search-link")}
        id="search-link"
        className={active === "search-link" ? "link active-link" : "link"}
        to="/search"
      >
        <i className="material-icons">search</i>
        <span>Search</span>
      </Link>

      <Link
        onClick={() => setActive("add-link")}
        id="add-link"
        className={active === "add-link" ? "link active-link" : "link"}
        to="/post"
      >
        <i className="material-icons">add</i>
        <span>Add</span>
      </Link>
      <Link
        onClick={() => setActive("inventory-link")}
        id="inventory-link"
        className={active === "inventory-link" ? "link active-link" : "link"}
        to="/inventory"
      >
        <i className="material-icons">dashboard</i>
        <span>Inventory</span>
      </Link>
    </nav>
  );
};

export default Menu;
