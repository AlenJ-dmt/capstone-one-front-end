import React, { useContext, useEffect } from "react";
import "./addTire.css";
import CustomButton from "../button/CustomButton";
import DropDown from "../dropDown/DropDown";
import colors from "../../constants/colors";
import TireContext from '../../context/tireContexts' 
import TiresApiService from "../../services/tires-api-service";

const AddTire = (props) => {

  const context =  useContext(TireContext)


  return (
    <>
      <form id="add-tire-form">
        <div style={{position: 'relative'}}>
          <DropDown
            name={"brand"}
            data={context.brands}
            color={colors.postBlue}
            style={{ width: 230, right: 0, position: 'absolute' }}
            label={true}
          />
          <br />  <br />
          {/* <DropDown
            name={"model"}
            data={[]}
            color={colors.postBlue}
            style={{ width: 230,  right: 0, position: 'absolute' }}
            label={true}
          />
          <br />  <br /> */}
          <DropDown
            name={"size"}
            data={context.width}
            color={colors.postBlue}
            style={{ width: 70,  right: 160, position: 'absolute' }}
            label={true}
          />
          <DropDown
            name={"tire-size-one"}
            data={context.ratio}
            color={colors.postBlue}
            style={{ width: 70 ,  right: 80, position: 'absolute'}}
          />
          <DropDown
            name={"tire-size-two"}
            data={context.diameter}
            color={colors.postBlue}
            style={{ width: 70,  right: 0, position: 'absolute' }}
          />
          <br />  <br />
          <DropDown
            name={"quantity"}
            data={context.quantity}
            color={colors.postBlue}
            style={{ width: 50, position: 'absolute', left: 60 }}
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
