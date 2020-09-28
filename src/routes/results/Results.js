import React from "react";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import './results.css'

class Results extends React.Component {
  render() {
    return (
      <div id='results-page'>
        <h1>Results for: </h1>
        <ItemBlock />
      </div>
    );
  }
}

export default Results;