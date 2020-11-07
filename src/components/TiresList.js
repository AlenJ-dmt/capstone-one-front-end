import React, { useContext } from "react";
import TireContext from "../context/tireContexts";
import ItemBlock from "./ItemBlock/ItemBlock";
import colors from "../constants/colors"

const TireList = (props) => {

  const tireContext = useContext(TireContext);

  const inventoryList = () => {
    return tireContext.tireList.map((tire) => (
      <ItemBlock
        backgroundColor={colors.postBlue}
        key={tire.id}
        title={tire.brand}
        size={tire.size}
        quantity={tire.quantity}
        id={tire.id}
        type={'tires'}
      />
    ));
  };

  return <>{inventoryList()}</>;
};

export default TireList;
