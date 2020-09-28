import React, { useContext} from "react";
import "./customWheelSearch.css";
import CustomButton from '../button/CustomButton'
import colors from '../../constants/colors'
import DropDown from '../dropDown/DropDown'
import WheelContext from "../../context/wheelContext";

const CustomWheelSearch = (props) => {

  const context = useContext(WheelContext);
  
  return (
    <>
      <form>
        <div id="search-custom-container">
          <p>Search: </p>
          <div style={{ position: "absolute", right: 0, width: '100%' }}>
          <DropDown
            name={"size"}
            data={context.wheelDiameter}
            color={colors.searchRed}
            style={{  width: 100, right: 115, position: 'absolute' }}
            label={true}
          />
          <DropDown
            name={"size"}
            data={context.wheelWidth}
            color={colors.searchRed}
            style={{  width: 100, right: 0, position: 'absolute'  }}
          />
          </div>
          <br />
          <br />
          <DropDown
            name={"bolt pattern"}
            data={context.boltPatter}
            color={colors.searchRed}
            style={{  width: 115, right: 0, position: 'absolute'  }}
            label={true}
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

export default CustomWheelSearch;
