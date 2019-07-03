import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  getByTestId,
  rerender
} from "@testing-library/react";
import ContadorHook from "../ContadorHook";

describe("ContadorHook tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ContadorHook />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
