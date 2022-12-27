import './App.css';
import './cabecalho.css';
import './corpo.css';
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