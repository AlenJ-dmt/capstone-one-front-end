import React from "react";
import Tires from '../../tireStore'
import './tireSearch.css'

const TireSearch = (props) => {
  const populateSelect = (selectType) => {
    return selectType.map((selection, index) => (
      <option key={index} value={selection}> {selection} </option>
    ));
  };

  return (
    <form>
      <div id='search-conatainer'>
        <p>Search</p>
        <select className='tire-drop-down' name="section-width">{populateSelect(Tires.sectionWidth)}</select>
        <select className='tire-drop-down' name="aspect-ratio">{populateSelect(Tires.aspectRatio)}</select>
        <select className='tire-drop-down' name="wheel-diameter">{populateSelect(Tires.wheelDiameter)}</select>
      </div>
    </form>
  );
};

export default TireSearch;
