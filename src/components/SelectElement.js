import React from "react";
import CustomButton from "../components/button/CustomButton";

const SelectElement = (props) => {
  return (
    <>
      <h2>Please select one</h2>
      <div style={{ justifyContent: "space-evenly" }}>
        <CustomButton
          onClickDo={() => props.selectType("Tires", "Used", "New")}
          color={props.tiresColor}
          styles={{ width: 146, marginRight: 5 }}
        >
          Tires
        </CustomButton>
        <CustomButton
          onClickDo={() => props.selectType("Wheels", "OEM", "Custom")}
          color={props.wheelsColor}
          styles={{ width: 146, marginLeft: 5 }}
        >
          Wheels
        </CustomButton>
      </div>
    </>
  );
};

export default SelectElement;
