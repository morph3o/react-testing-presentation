import React, { useState } from "react";

const ContadorHook = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador Hook</h2>
      <h3 data-testid="counter-text">{contador}</h3>
      <button
        onClick={() => setContador(contador + 1)}
        data-testid="button-increment"
      >
        +1
      </button>
    </div>
  );
};

export default ContadorHook;
