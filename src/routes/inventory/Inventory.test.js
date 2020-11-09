import React from "react";
import Inventory from "./Inventory";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Inventory />, div);
  ReactDOM.unmountComponentAtNode(div);
});
