import React, { useContext, useState } from "react";
import DropDown from "../../components/dropDown/DropDown";
import colors from "../../constants/colors";
import CustomButton from "../../components/button/CustomButton";
import "./addOemWheel.css";
import wheelContext from "../../context/wheelContext";
import WheelApiServices from "../../services/wheels-api-service";

const AddOemWheel = () => {
  const context = useContext(wheelContext);
  const [idx, setIdx] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [wheelWidth, setWheelWidth] = useState("");
  const [wheelDiameter, setWheelDiameter] = useState("");
  const [boltPattern, setBoltPattern] = useState("");
  const [quantity, setQuantity] = useState("");

  const makeFunction = (ev) => {
    setIdx(context.carMake.indexOf(ev.target.value.toString()));
    setMake(ev.target.value);
  };

  const newOemWheel = {
    make: make,
    model: model,
    car_year: carYear,
    wheel_width: wheelWidth,
    wheel_diameter: wheelDiameter,
    bolt_pattern: boltPattern,
    quantity: quantity,
  };

  const addNewOemWheel = () => {
    WheelApiServices.addOemWheel(
      newOemWheel.make,
      newOemWheel.model,
      newOemWheel.car_year,
      newOemWheel.wheel_width,
      newOemWheel.wheel_diameter,
      newOemWheel.bolt_pattern,
      newOemWheel.quantity
    ).then((wheels) => {
      context.setWheelList(wheels);
    });
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
            onChangeDo={(ev) => makeFunction(ev)}
          />
          <br /> <br />
          <DropDown
            name={"model"}
            data={context.carModel[idx] || []}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
            onChangeDo={(ev) => setModel(ev.target.value)}
          />
          <br /> <br />
          <DropDown
            name={"year"}
            data={context.carYear}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
            onChangeDo={(ev) => setCarYear(ev.target.value)}
          />
          <br /> <br />
          <DropDown
            name={"size"}
            data={context.wheelDiameter}
            color={colors.postBlue}
            style={{ width: 100, right: 130, position: "absolute" }}
            label={true}
            onChangeDo={(ev) => setWheelDiameter(ev.target.value)}
          />
          <DropDown
            name={"sizeTwo"}
            data={context.wheelWidth}
            color={colors.postBlue}
            style={{ width: 100, right: 0, position: "absolute" }}
            label={false}
            onChangeDo={(ev) => setWheelWidth(ev.target.value)}
          />
          <br /> <br />
          <DropDown
            name={"bolt pattern"}
            data={context.boltPatter}
            color={colors.postBlue}
            style={{ width: 180, right: 0, position: "absolute" }}
            label={true}
            onChangeDo={(ev) => setBoltPattern(ev.target.value)}
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
            onChangeDo={(ev) => setQuantity(ev.target.value)}
          />
        </div>
      </form>
      <CustomButton
        styles={{ width: "80%", marginTop: 40 }}
        onClickDo={() => addNewOemWheel()}
        color={colors.postBlue}
      >
        Add
      </CustomButton>
    </>
  );
};

export default AddOemWheel;
