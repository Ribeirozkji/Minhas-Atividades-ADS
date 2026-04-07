import { useState } from "react";

function App() {
  const [price, setPrice] = useState(10);
  const [qty, setQty] = useState(2);
  const [total, setTotal] = useState(0);

  function calcTotal() {
  const result = Number(price) + qty;
  setTotal(result);
}

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Debug React</h1>

      <p>Preço: {price}</p>
      <p>Quantidade: {qty}</p>

      <button onClick={calcTotal}>Calcular total</button>

      <h2>Total: {total}</h2>
    </div>
  );
}

export default App;