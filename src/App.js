import './App.css';
import './css/Cabecalho.css';
import './css/Corpo.css';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Corpo/>
    </div>
  );
}

export default App;
