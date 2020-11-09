import React from "react";
import Results from "./Results";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Results />, div);
  ReactDOM.unmountComponentAtNode(div);
});