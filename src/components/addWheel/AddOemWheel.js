import React, { useContext, useState } from "react";
import DropDown from "../../components/dropDown/DropDown";
import colors from "../../constants/colors";
import CustomButton from "../../components/button/CustomButton";
import "./addOemWheel.css";
import wheelContext from "../../context/wheelContext";

const AddOemWheel = () => {
  const context = useContext(wheelContext);
  const [idx, setIdx] = useState(0);

  const makeFunction = (ev) => {
    setIdx(context.carMake.indexOf(ev.target.value.toString()));
  };

  return (
    <>
      <form id="oem-wheel-form">
        <div style={{ position: "relative" }}>
          <DropDown
            name={"make"}
            data={context.carMake}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
            onChangeDo={(ev) => makeFunction(ev) }
          />
          <br /> <br />
          <DropDown
            name={"model"}
            data={context.carModel[idx] || []}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"year"}
            data={context.carYear}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"size"}
            data={context.wheelDiameter}
            color={colors.postBlue}
            style={{ width: 100, right: 130, position: "absolute" }}
            label={true}
          />
          <DropDown
            name={"sizeTwo"}
            data={context.wheelWidth}
            color={colors.postBlue}
            style={{ width: 100, right: 0, position: "absolute" }}
            label={false}
          />
          <br /> <br />
          <DropDown
            name={"bolt pattern"}
            data={context.boltPatter}
            color={colors.postBlue}
            style={{ width: 180, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          {/* <DropDown
            name={"offset"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 100, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br /> */}
          <DropDown
            name={"quantity"}
            data={context.quantity}
            color={colors.postBlue}
            style={{ width: 100, right: 0, position: "absolute" }}
            label={true}
          />
        </div>
      </form>
      <CustomButton
        styles={{ width: "80%", marginTop: 40 }}
        onClickDo={() => {}}
        color={colors.postBlue}
      >
        Add
      </CustomButton>
    </>
  );
};

export default AddOemWheel;
