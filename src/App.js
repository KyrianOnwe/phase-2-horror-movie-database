import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies';
import Watched from './components/Watched';
import Add from './components/Add'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { baseUrl } from './Globals';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [watchedFlix, setWatchedFlix] = useState([]);
  const message = "Turn off the lights and watch a movie, already!"




  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((data) => setData(data))
    }, [])

  function setData(data){
    setWatchedFlix(data.filter((d) => d.watched === true));
    setMovieData(data.filter((d) => d.watched === false))
  }

  // movieData.filter((mv) => mv.watched === true ? setWatchedFlix([...watchedFlix, mv]) : null)

  function watchedFlick(id){
    const juz = movieData.find((movie) => movie.id === id);
    if (!juz){return}

    juz.watched = !juz.watched;
    fetch(baseUrl + `/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"  },
      body: JSON.stringify({    watched: eval(`${juz.watched}`)  })
    })
      .then((r) => r.json())
      .then(() => setWatchedFlix([...watchedFlix, juz]))
      .then(() => setMovieData(movieData.filter((md) => md.id !== id )))
  }

  function handleNewFlix(flix){
    setMovieData([...movieData, flix]);
    
  }

  // useEffect(() => <Movies movies={movieData} isWatched={watchedFlick} />, [watchedFlix])

  // useEffect(() => <Watched message={message} watched={watchedFlix} />, [movieData])



  console.log(movieData)

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movieData} isWatched={watchedFlick} />} />
          <Route path="/watched" element={<Watched message={message} watched={watchedFlix} isWatched={watchedFlick}/>} />
          <Route path="/add" element={<Add add={handleNewFlix} />} />
        </Routes>
        <Footer />
     </Router>
  );
}

export default App;
