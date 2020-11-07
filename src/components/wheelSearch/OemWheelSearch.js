import React, { useContext, useState } from "react";
import "./wheelSearch.css";
import CustomButton from "../button/CustomButton";
import { useHistory } from "react-router-dom";
import colors from "../../constants/colors";
import DropDown from "../dropDown/DropDown";
import WheelContext from "../../context/wheelContext";
import WheelsApiService from "../../services/wheels-api-service";

const WheelSearch = (props) => {
  const context = useContext(WheelContext);
  const history = useHistory();

  const [idx, setIdx] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  let oemWheelSearched = {
    carMake: make,
    carModel: model,
    carYear: year,
  };

  const searchOemWheel = () => {
    WheelsApiService.searchOemWheel(
      oemWheelSearched.carYear,
      oemWheelSearched.carMake,
      oemWheelSearched.carModel
    )
      .then((wheels) => context.setOemWheelResults(wheels))
      .then(() => history.push("/oemWheelResults"));
  };

  const makeFunction = (ev) => {
    setIdx(context.carMake.indexOf(ev.target.value.toString()));
    setMake(ev.target.value);
  };

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
            onChangeDo={(ev) => makeFunction(ev)}
          />
          <br></br>
          <br></br>
          <DropDown
            name={"model"}
            data={context.carModel[idx] || []}
            color={colors.searchRed}
            style={{ width: 200, position: "absolute", right: 0 }}
            label={true}
            onChangeDo={(ev) => setModel(ev.target.value)}
          />
          <br></br>
          <br></br>
          <DropDown
            name={"year"}
            data={context.carYear}
            color={colors.searchRed}
            style={{ width: 200, position: "absolute", right: 0 }}
            label={true}
            onChangeDo={(ev) => setYear(ev.target.value)}
          />
          <br></br>
          <br></br>
        </div>
      </form>
      <CustomButton
        styles={{ width: "80%", marginTop: 40 }}
        onClickDo={() => searchOemWheel() }
        color={colors.searchRed}
      >
        Search
      </CustomButton>
    </>
  );
};

export default WheelSearch;
