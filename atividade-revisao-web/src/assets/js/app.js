const form = document.getElementById('form');
const lista = document.getElementById('lista');

form.addEventListener('submit', function(e) {
 e.preventDefault();

 const nome = document.getElementById('nome').value;
 const email = document.getElementById('email').value;
 const senha = document.getElementById('senha').value;

 if (!nome || !email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  const dados = JSON.parse(localStorage.getItem('webpass')) || [];

  dados.push({nome, email, senha});

  localStorage.setItem('webpass', JSON.stringify(dados));

  form.reset();

  listar();
});
  function listar() {
    lista.innerHTML = "";
    const dados = JSON.parse(localStorage.getItem('webpass')) || [];

    dados.forEach((item, index) => {

    
    lista.innerHTML += `
      <div>
        <strong>${item.nome}</strong> - ${item.email} <br>
        ${item.senha}
        <br>
        <button onclick="remover(${index})">Excluir</button>
      </div>
    `;
    });
  };