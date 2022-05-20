import './App.css';
import Home from './components/Home'
import Movies from './components/Movies';
import Watched from './components/Watched';
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      <Home />
      <Movies />
      <Watched />
      <Add />

    </div>
  );
}

export default App;
