import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ContadorHook from "../ContadorHook";

describe("ContadorHook tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ContadorHook />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should match snapshot", () => {
    const { container } = render(<ContadorHook />);
    expect(container).toMatchSnapshot();
  });

  it("Counter loads with initial state of 0", () => {
    const { container } = render(<ContadorHook />);
    const countValue = getByTestId(container, "counter-text");
    expect(countValue.textContent).toBe("0");
  });

  it("Increment and decrement buttons work", () => {
    const { container } = render(<ContadorHook />);
    const countValue = getByTestId(container, "counter-text");
    const increment = getByTestId(container, "button-increment");

    expect(countValue.textContent).toBe("0");
    fireEvent.click(increment);
    expect(countValue.textContent).toBe("1");
    fireEvent.click(increment);
    expect(countValue.textContent).toBe("2");
  });
});
