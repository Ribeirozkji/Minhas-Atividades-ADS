import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Meu Perfil</h1>

      <div className="card">
        <p><strong>Nome:</strong> Pedro Ribeiro</p>
        <p><strong>Email:</strong> pedro@email.com</p>
        <p>
          <strong>GitHub:</strong> 
          <a href="https://github.com/Ribeirozkji" target="_blank">
            Ribeirozkji
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;