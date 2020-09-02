import React from "react";
import "./wheelSearch.css";

const WheelSearch = (props) => {
  return (
    <form>
      <div className="search-oem-container">
        <p>Search: </p>
        <label className="drop-down-label" htmlFor="make">
          Make:{" "}
        </label>{" "}
        <select className="drop-down" name="make"></select>
        <br />  <br />
        <label className="drop-down-label" htmlFor="model">
          Model:{" "}
        </label>{" "}
        <select className="drop-down" name="model"></select>
        <br />  <br />
        <label className="drop-down-label" htmlFor="year">
          Year:{" "}
        </label>{" "}
        <select className="drop-down" name="year"></select>
        <br />  <br />
      </div>
    </form>
  );
};

export default WheelSearch;
