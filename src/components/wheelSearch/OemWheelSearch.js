import React, { useEffect, useContext, useState } from "react";
import "./wheelSearch.css";
import CustomButton from "../button/CustomButton";
import colors from "../../constants/colors";
import DropDown from "../dropDown/DropDown";
import WheelContext from "../../context/wheelContext";
import WheelsApiService from "../../services/wheels-api-service";

const WheelSearch = (props) => {
  const context = useContext(WheelContext);
  const [models, setModels] = useState([])
  useEffect(() => {
    WheelsApiService.getOemWheelParameters().then((jsonResponse) =>
      context.setOemWheelSearchParameters(
        jsonResponse.carMakes,
        jsonResponse.carModels,
        jsonResponse.years
      )
    );
  }, []);
  
  
  return (
    <>
      <form>
        <div className="search-oem-container">
          <p>Search: </p>
          <DropDown
            name={"make"}
            data={context.carMake}
            color={colors.searchRed}
            style={{ width: 200, position: "absolute", right: 0 }}
            label={true}
          />
          <br></br>
          <br></br>
          <DropDown
            name={"model"}
            data={context.carModel}
            color={colors.searchRed}
            style={{  width: 200, position: "absolute", right: 0  }}
            label={true}
          />
          <br></br>
          <br></br>
          <DropDown
            name={"year"}
            data={context.carYear}
            color={colors.searchRed}
            style={{  width: 200, position: "absolute", right: 0  }}
            label={true}
          />
          <br></br>
          <br></br>
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

export default WheelSearch;
