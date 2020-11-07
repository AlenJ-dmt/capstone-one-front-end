import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import WheelContext from "../../context/wheelContext";

const OemWheelDetails = (props) => {
  const context = useContext(WheelContext);
  const itemId = useParams();

  const SelectedItem = context.wheelList.filter(
    (wheel) => wheel.id == itemId.oemWheelId
  );

  return (
    <>
      <section id="detail-section">
        <h1>Details</h1>
        <h2>Make: {SelectedItem[0].make || ""}</h2>
        <h2>Model: {SelectedItem[0].model || ""}</h2>
        <h2>Year: {SelectedItem[0].carYear || ""} </h2>
        <h2>Quanitty: {SelectedItem[0].quantity || ""}</h2>
      </section>
    </>
  );
};

export default OemWheelDetails;
