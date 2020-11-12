import React from "react";
import "./dropDown.css";

const DropDown = (props) => {
  const populateSelect = (selectType) => {
    return selectType.map((selection, index) => (
      <option key={index} value={selection}>
        {" "}
        {selection}{" "}
      </option>
    ));
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      {props.label && (
        <>
          <label className="drop-down-label" htmlFor={props.name}>
            {capitalizeFirstLetter(props.name)}:{""}
          </label>
        </>
      )}
      <select
        className="drop-down-component"
        name={props.name}
        style={{ ...props.style, backgroundColor: props.color }}
        onChange={props.onChangeDo}
      >
        {populateSelect(props.data)}
      </select>
    </>
  );
};

DropDown.defaultProps ={
  data: []
}

export default DropDown;
