import React from "react";
import "./customWheelSearch.css";
import CustomButton from '../button/CustomButton'
import colors from '../../constants/colors'

const CustomWheelSearch = (propr) => {
  return (
    <>
      <form>
        <div id="search-custom-container">
          <p>Search: </p>
          <label id="search-custom-size" htmlFor="Size">
            Size:{" "}
          </label>
          <div style={{ position: "absolute", right: 0 }}>
            <select
              className="custom-rim-drop-down"
              name="rim-diameter"
            ></select>
            <select className="custom-rim-drop-down" name="rim-width"></select>
          </div>
          <br />
          <br />
          <label
            htmlFor="bolt-pattern"
            style={{ position: "absolute", left: 0 }}
          >
            Bolt Pattern:{" "}
          </label>
          <select
            style={{ position: "absolute", right: 0 }}
            className="bolt-pattern"
            name="bolt-patter"
          ></select>
        </div>
      </form>
      <CustomButton
        styles={{ width: "80%", marginTop: 40 }}
        onClickDo={() => {}}
        color={colors.searchRed}
      >
        Search
      </CustomButton>
    </>
  );
};

export default CustomWheelSearch;
