import React, { useContext } from "react";
import DropDown from "../../components/dropDown/DropDown";
import colors from "../../constants/colors";
import CustomButton from "../../components/button/CustomButton";
import "./addOemWheel.css";
import wheelContext from '../../context/wheelContext'

const AddCustomWheel = () => {

  const context = useContext(wheelContext);

  return (
    <>
      <form id="oem-wheel-form">
        <div style={{ position: "relative" }}>
          <DropDown
            name={"brand"}
            data={context.wheelBrands}
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

export default AddCustomWheel;
