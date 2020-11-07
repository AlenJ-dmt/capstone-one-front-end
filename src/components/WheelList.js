import React, { useContext } from "react";
import WheelContext from "../context/wheelContext";
import ItemBlock from "./ItemBlock/ItemBlock";
import colors from "../constants/colors";

const WheelList = (props) => {
  const wheelContext = useContext(WheelContext);

  const inventoryList = () => {
    return wheelContext.wheelList.map((wheel) => (
      <ItemBlock
        backgroundColor={colors.postBlue}
        key={wheel.id}
        title={wheel.make}
        size={wheel.model}
        quantity={wheel.quantity}
        id={wheel.id}
        type={'oemWheels'}
      />
    ));
  };

  return <>{inventoryList()}</>;
};

export default WheelList;
