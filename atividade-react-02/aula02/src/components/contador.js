import { useState } from 'react';

function Contador() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <p>Contagem: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Aumentar</button>
      <button onClick={() => setValor(valor - 1)}>Diminuir</button>
    </div>
  );
}
export default Contador;
