import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Contador from "./Contador";

function App() {
  return (
    <div className="App">
      <h1>Contador</h1>
      <Contador />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
