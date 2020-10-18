import React from "react";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import "./results.css";
import colors from "../../constants/colors";
import TireContext from "../../context/tireContexts";

class Results extends React.Component {
  static contextType = TireContext;

  result = this.context.tiresResults.map((result, idx) => (
    <ItemBlock
      key={idx}
      backgroundColor={colors.searchRed}
      id={result.id}
      title={result.brand}
      quantity={result.quantity}
      size={result.quantity}
    />
  ));

  render() {
    return (
      <div id="results-page">
        <h1>Results for: </h1>
        {this.result || []}
      </div>
    );
  }
}

export default Results;
