import React from "react";
import "./addTire.css";
import CustomButton from "../button/CustomButton";
import DropDown from "../dropDown/DropDown";
import colors from "../../constants/colors";

const AddTire = (props) => {
  return (
    <>
      <form id="add-tire-form">
        <div style={{position: 'relative'}}>
          <DropDown
            name={"brand"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: 'absolute' }}
            label={true}
          />
          <br />  <br />
          <DropDown
            name={"model"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 230,  right: 0, position: 'absolute' }}
            label={true}
          />
          <br />  <br />
          <DropDown
            name={"size"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 70,  right: 160, position: 'absolute' }}
            label={true}
          />
          <DropDown
            name={"tire-size-one"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 70 ,  right: 80, position: 'absolute'}}
          />
          <DropDown
            name={"tire-size-two"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 70,  right: 0, position: 'absolute' }}
          />
          <br />  <br />
          <DropDown
            name={"quantity"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 50, position: 'absolute' }}
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

export default AddTire;
