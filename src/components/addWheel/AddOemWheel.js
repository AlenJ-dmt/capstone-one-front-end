import React from "react";
import DropDown from "../../components/dropDown/DropDown";
import colors from "../../constants/colors";
import CustomButton from "../../components/button/CustomButton";
import "./addOemWheel.css";

const AddOemWheel = () => {
  return (
    <>
      <form id="oem-wheel-form">
        <div style={{ position: "relative" }}>
          <DropDown
            name={"make"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"model"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"year"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"size"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 100, right: 130, position: "absolute" }}
            label={true}
          />
          <DropDown
            name={"sizeTwo"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 100, right: 0, position: "absolute" }}
            label={false}
          />
          <br /> <br />
          <DropDown
            name={"bolt pattern"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 180, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"offset"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 100, right: 0, position: "absolute" }}
            label={true}
          />
          <br /> <br />
          <DropDown
            name={"quantity"}
            data={[]}
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
