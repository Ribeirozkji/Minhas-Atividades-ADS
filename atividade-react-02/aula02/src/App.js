import Header from './components/header';
import Saudacao from './components/mensage';
import Contador from './components/contador';
import ListaTecs from './components/lista';
import BotaoAcao from './components/buttom';

function App() {
  return (
    <div className="App">
      <Header />
      <Saudacao nome="Pedro Henrique Ribeiro" />
      <Contador />
      <ListaTecs />
      <BotaoAcao />
    </div>
  );
}
export default App;