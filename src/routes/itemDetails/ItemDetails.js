import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TireContext from "../../context/tireContexts";
import "./itemDetails.css";

const TireDetails = (props) => {
  const context = useContext(TireContext);
  const itemId = useParams()

  const SelectedItem = context.tireList.filter(
    (tire) => String(tire.id) === String(itemId.tireId)
  );

  return (
    <>
      <section id="detail-section">
        <h1>Details</h1>
        <h2>
          Title: {SelectedItem[0] === undefined ? "" : SelectedItem[0].brand}
        </h2>
        <h2>
          Size: {SelectedItem[0] === undefined ? "" : SelectedItem[0].size}
        </h2>
        <h2>
          Quantity:{" "}
          {SelectedItem[0] === undefined ? "" : SelectedItem[0].quantity}
        </h2>
        <h2>
          Condition:{" "}
          {SelectedItem[0] === undefined ? "" : SelectedItem[0].condition}{" "}
        </h2>
      </section>
    </>
  );
};

TireDetails.defaultProps = {
  SelectedItem: [{ brand: "", size: "", quantity: "", condition: "" }],
};

export default TireDetails;
