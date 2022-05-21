import React, { useState } from 'react'


const Add = () => {
    const [movieForm, setMovieForm] = useState({
        title: "",
        year: "",
        subgenre: "",
        poster: "",
        director: ""
    })

  return (
    <div>
        <h1>What should we watch next?</h1>
        <form>
            <input type="text" name="title" id="title"/>
            <input type="text" name="year" id="year"/>
            <input type="text" name="subgenre" id="subgenre"/>
            <input type="text" name="poster" id="poster"/>
            <input type="text" name="director" id="director"/>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Add