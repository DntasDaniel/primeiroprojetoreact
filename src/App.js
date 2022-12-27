import './app.css';
import './css/cabecalho.css';
import './css/corpo.css';
import Cabecalho from './components/cabecalho';
import Corpo from './components/corpo';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Corpo/>
    </div>
  );
}

export default App;
