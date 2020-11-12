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
      style={{  display: url === undefined ? 'none' : url.location.pathname === "/" ? "none" : "flex"  }}
    >
      <a
        onClick={() => setActive("search-link")}
        id="search-link"
        className={active === "search-link" ? "link active-link" : "link"}
        href="/search"
      >
        <i className="material-icons">search</i>
        <span>Search</span>
      </a>

      <a
        onClick={() => setActive("add-link")}
        id="add-link"
        className={active === "add-link" ? "link active-link" : "link"}
        href="/post"
      >
        <i className="material-icons">add</i>
        <span>Add</span>
      </a>
      <a
        onClick={() => setActive("inventory-link")}
        id="inventory-link"
        className={active === "inventory-link" ? "link active-link" : "link"}
        href="/inventory"
      >
        <i className="material-icons">dashboard</i>
        <span>Inventory</span>
      </a>
    </nav>
  );
};

export default Menu;
