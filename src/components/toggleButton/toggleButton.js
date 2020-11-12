import React from "react";
import "./toggleButton.css";

const ToggleButton = (props) => {
  return (
    <>
      <div className="toggle-button-container">
        <span> {props.toggleButtonOptions[0]} </span>
        <label className="switch">
          <input type="checkbox" onClick={() => props.setToggleState()} />
          <span className="slider round"></span>
        </label>
        <span> {props.toggleButtonOptions[1]} </span>
      </div>
    </>
  );
};

ToggleButton.defaultProps = {
  toggleButtonOptions: ['right', 'left']
}

export default ToggleButton;
