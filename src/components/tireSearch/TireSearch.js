import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom'
import "./tireSearch.css";
import CustomButton from "../button/CustomButton";
import colors from "../../constants/colors";
import DropDown from "../../components/dropDown/DropDown";
import TireContext from "../../context/tireContexts";
import TiresApiService from "../../services/tires-api-service";

const TireSearch = (props) => {
  const context = useContext(TireContext);
  const history = useHistory()

  const [width, setWidth] = useState("");
  const [ratio, setRatio] = useState("");
  const [diameter, setDiameter] = useState("");

  const searchTire = {
    size: `${width}${ratio}${diameter}`,
    condition: props.condition,
  };

  const searchTireBySize = () => {
    TiresApiService.getTiresBySize(
      searchTire.size,
      searchTire.condition
    ).then((tires) => context.setTireResults(tires))
    .then(() => history.push('/results'))
  } 

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
        onClickDo={() => searchTireBySize()}
        color={colors.searchRed}
      >
        Search
      </CustomButton>
    </>
  );
};

export default TireSearch;
