import React, { useContext } from "react";
import "./results.css";
import TireContext from "../../context/tireContexts"
import colors from "../../constants/colors"
import ItemBlock from "../../components/ItemBlock/ItemBlock"
import WheelContext from "../../context/wheelContext"

const Results = props => {

  const tireContext = useContext(TireContext)
  const wheelContext = useContext(WheelContext)

  const tireList = () => {
    return tireContext.tiresResults.map((tire) => (
      <ItemBlock
        backgroundColor={colors.searchRed}
        key={tire.id}
        title={tire.brand}
        size={tire.size}
        quantity={tire.quantity}
        id={tire.id}
        type={'tires'}
      />
    ));
  };

  const oemWheelList = () => {
    return wheelContext.oemWheelResults.map((wheel) => (
      <ItemBlock
        backgroundColor={colors.searchRed}
        key={wheel.id}
        title={wheel.make}
        size={wheel.model}
        quantity={wheel.quantity}
        id={wheel.id}
        type={'oemWheels'}
      />
    ));
  };
  
    return (
      <div id="results-page">
        <h1>Results for: </h1>
        {props.type === 'tires' ? tireList() : []}
        {props.type === 'oemWheels' ? oemWheelList() : []}
      </div>
    );
}



export default Results;
