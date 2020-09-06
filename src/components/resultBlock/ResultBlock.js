import React from "react";
import "./resultBlock.css";

const ResultBlock = (props) => {
  return (
    <>
      <div id="result-block-container">
        <p style={{fontSize: 18}}>
          <span style={{position: 'absolute', left: 10}}>Michelin</span>
          <span>Touring</span>
          <span style={{position: 'absolute', right: 10}}>4</span>
        </p>
      </div>
    </>
  );
};

export default ResultBlock;
