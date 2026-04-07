# Atividade: Debug em React (Vite)

**Aluno:** Pedro Ribeiro  
**Projeto:** Debug React  

---

## 📌 Objetivo

Compreender o conceito de debug, identificar um erro no código e corrigi-lo utilizando ferramentas de inspeção.

---

## 🧠 O que é Debug

Debug é o processo de investigar o código para identificar erros, analisando valores das variáveis e o comportamento da aplicação em tempo real.

---

## 💻 Código com Bug

```jsx
import { useState } from "react";

function App() {
  const [price, setPrice] = useState("10");
  const [qty, setQty] = useState(2);
  const [total, setTotal] = useState(0);

  function calcTotal() {
    const result = price + qty; // BUG
    setTotal(result);
  }

  return (
    <div>
      <h1>Debug React</h1>
      <p>Preço: {price}</p>
      <p>Quantidade: {qty}</p>
      <button onClick={calcTotal}>Calcular total</button>
      <h2>Total: {total}</h2>
    </div>
  );
}

export default App;