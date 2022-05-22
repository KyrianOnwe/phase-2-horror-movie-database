import React, { useState } from 'react'
import  { baseUrl, headers } from '../Globals'


const Add = () => {
    const [movieForm, setMovieForm] = useState({
        title: "",
        year: "",
        subgenre: "",
        poster: "",
        director: ""
    })

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
        .then((r) => r.json)
        .then(() => clearForm())
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
    <div>
        <h1>What should we watch next?</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" placeholder='title' value={movieForm.title} onChange={handleSetFormData} />
            <input type="text" name="year" id="year" placeholder='year' value={movieForm.year} onChange={handleSetFormData} />
            <input type="text" name="subgenre" id="subgenre" placeholder='subgenre' value={movieForm.subgenre} onChange={handleSetFormData} />
            <input type="text" name="poster" id="poster" placeholder='poster url' value={movieForm.poster} onChange={handleSetFormData} />
            <input type="text" name="director" id="director" placeholder='director' value={movieForm.director} onChange={handleSetFormData} />
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Add;