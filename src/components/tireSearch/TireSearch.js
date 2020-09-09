import React from "react";
import Tires from "../../tireStore";
import "./tireSearch.css";
import CustomButton from "../button/CustomButton";
import colors from "../../constants/colors";
import DropDown from "../../components/dropDown/DropDown";

const TireSearch = (props) => {
  return (
    <>
      <form>
        <div id="search-conatainer">
          <p>Search</p>

          <DropDown
            name={"section-width"}
            data={Tires.sectionWidth}
            color={colors.searchRed}
            style={{ width: 88 }}
          />
          <DropDown
            name={"aspect-ratio"}
            data={Tires.aspectRatio}
            color={colors.searchRed}
            style={{ width: 88 }}
          />
          <DropDown
            name={"wheel-diameter"}
            data={Tires.wheelDiameter}
            color={colors.searchRed}
            style={{ width: 88 }}
          />
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

export default TireSearch;
