import React, { Component } from "react";

class Contador extends Component {
  constructor() {
    super();

    this.state = {
      contador: 0
    };
  }

  handlerOnClick = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador Normal</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.handlerOnClick}>+1</button>
      </div>
    );
  }
}

export default Contador;
