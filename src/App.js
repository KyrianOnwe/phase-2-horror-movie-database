import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies';
import Watched from './components/Watched';
import Add from './components/Add'
import Navbar from './components/Navbar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>

    </Router>
  );
}

export default App;
