import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./tireSearch.css";
import CustomButton from "../button/CustomButton";
import colors from "../../constants/colors";
import DropDown from "../../components/dropDown/DropDown";
import TireContext from "../../context/tireContexts";
import TiresApiService from "../../services/tires-api-service";

const TireSearch = (props) => {
  const context = useContext(TireContext);
  const history = useHistory();

  const [width, setWidth] = useState("");
  const [ratio, setRatio] = useState("");
  const [diameter, setDiameter] = useState("");
  const [error, setError] = useState(false);

  const searchTire = {
    size: `${width}${ratio}${diameter}`,
    condition: props.condition,
  };

  const validateInput = () => {
    if (width === "" || ratio === "" || diameter === "") {
      setError(true);
      return;
    }
    searchTireBySize();
  };

  const searchTireBySize = () => {
    TiresApiService.getTiresBySize(searchTire.size, searchTire.condition)
      .then((tires) => context.setTireResults(tires))
      .then(() => history.push("/tiresResults"));
  };

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
            onChangeDo={(ev) => setWidth(ev.target.value)}
          />
          <DropDown
            name={"aspect-ratio"}
            data={context.ratio}
            color={colors.searchRed}
            style={{ width: 88 }}
            onChangeDo={(ev) => setRatio(ev.target.value)}
          />
          <DropDown
            name={"wheel-diameter"}
            data={context.diameter}
            color={colors.searchRed}
            style={{ width: 88 }}
            onChangeDo={(ev) => setDiameter(ev.target.value)}
          />
        </div>
      </form>
      <CustomButton
        styles={{ width: "80%", marginTop: 40 }}
        onClickDo={() => validateInput()}
        color={colors.searchRed}
      >
        Search
      </CustomButton>
      <p>Demo: look for 205 55 16</p>
      {error && (
        <div className="search-tire-error">
          <p>Please select a valid input!</p>
        </div>
      )}
    </>
  );
};

export default TireSearch;
