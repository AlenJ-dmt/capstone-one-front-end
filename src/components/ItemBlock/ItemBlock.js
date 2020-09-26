import React from "react";
import "./ItemBlock.css";

const ItemBlock = (props) => {
  return (
    <>
      <div
        id="result-block-container"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <span
          className="span-result"
          style={{ position: "absolute", left: 10 }}
        >
          {props.title}
        </span>
        <span className="span-result">{props.size}</span>
        <span
          className="span-result"
          style={{ position: "absolute", right: 10 }}
        >
          {props.quantity}
        </span>
      </div>
    </>
  );
};

export default ItemBlock;
