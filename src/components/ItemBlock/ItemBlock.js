import React from "react";
import { useHistory } from 'react-router-dom'
import "./ItemBlock.css";

const ItemBlock = (props) => {

  const history = useHistory()

  return (
    <>
      <div
        id="result-block-container"
        style={{ backgroundColor: props.backgroundColor }}
        onClick={() => history.push(`/tires/${props.id}`) }
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
