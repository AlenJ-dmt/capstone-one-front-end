import React from "react";
import "./button.css";

const CustomButton = (props) => {
  return (
    <>
      <button onClick={() => props.onClickDo()}
        style={{
          "backgroundColor": `${
            props.buttonType === "Search" ? "#FFEBEB" : "#F2F6FF"
          }`,
        }}
        id="custom-button"
      >
        {props.children}
      </button>
    </>
  );
};

export default CustomButton;
