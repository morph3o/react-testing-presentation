import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ContadorHook from "./ContadorHook";

function App() {
  return (
    <div className="App">
      <h1>Contador</h1>
      <ContadorHook />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
