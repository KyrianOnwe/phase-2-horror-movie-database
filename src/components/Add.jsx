import React, { useState } from 'react';
import  { baseUrl, headers } from '../Globals';
import { useNavigate } from 'react-router-dom';


const Add = (props) => {
  const add = props.add
  const [movieForm, setMovieForm] = useState({
      title: "",
      year: "",
      subgenre: "",
      poster: "",
      director: "",
      watched: false
  })

  const hist = useNavigate();

  function handleSetFormData(event){
    setMovieForm({
      ...movieForm,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(baseUrl, {
      method: "POST", 
      headers,
      body: JSON.stringify(movieForm)
    })
      .then((r) => r.json())
      .then((data) => add(data))
      .then(() => {clearForm();
                  hist("/movies")})
  
  }

  function clearForm(){
    setMovieForm({
      title: "",
      year: "",
      subgenre: "",
      poster: "",
      director: ""
  })
  }

  return (
    <div className='movie-form-container'>
        <h1>What should we watch next?</h1>
        <form className='movie-form' onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder='title' value={movieForm.title} onChange={handleSetFormData} />
            <br />
            <input type="text" name="year" id="year" placeholder='year' value={movieForm.year} onChange={handleSetFormData} />
            <br />           
            <input type="text" name="subgenre" id="subgenre" placeholder='subgenre' value={movieForm.subgenre} onChange={handleSetFormData} />
            <br />
            <input type="text" name="poster" id="poster" placeholder='poster url' value={movieForm.poster} onChange={handleSetFormData} />
            <br />
            <input type="text" name="director" id="director" placeholder='director' value={movieForm.director} onChange={handleSetFormData} />
            <br />
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Add;