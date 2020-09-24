import React, { useContext, useEffect } from "react";
import Tires from "../../tireStore";
import "./tireSearch.css";
import CustomButton from "../button/CustomButton";
import colors from "../../constants/colors";
import DropDown from "../../components/dropDown/DropDown";
import TireContext from "../../context/tireContexts";
import TiresApiService from "../../services/tires-api-service";

const TireSearch = (props) => {
  const context = useContext(TireContext);

  useEffect(() => {
    TiresApiService.getTiresSize().then((jsonResponse) =>
      context.setTireSizeOptions(
        jsonResponse.width,
        jsonResponse.ratio,
        jsonResponse.diameter
      )
    )
  }, []);

  return (
    <>
      <form>
        <div id="search-conatainer">
          <p>Search</p>

          <DropDown
            name={"section-width"}
            data={context.width}
            color={colors.searchRed}
            style={{ width: 88 }}
          />
          <DropDown
            name={"aspect-ratio"}
            data={context.ratio}
            color={colors.searchRed}
            style={{ width: 88 }}
          />
          <DropDown
            name={"wheel-diameter"}
            data={context.diameter}
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
