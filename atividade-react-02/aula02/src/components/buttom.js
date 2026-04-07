function BotaoAcao() {
  function avisar() {
    alert('Ação realizada com sucesso!');
  }
  return <button onClick={avisar}>Clique Aqui</button>;
}
export default BotaoAcao;
