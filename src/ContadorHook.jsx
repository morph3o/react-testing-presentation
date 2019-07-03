import React, { useState } from "react";

const ContadorHook = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador Hook</h2>
      <h3 data-testid="contador">{contador}</h3>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
};

export default ContadorHook;
