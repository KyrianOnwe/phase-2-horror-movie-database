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
            <input type="text" name="title" id="title" placeholder='title'/>
            <input type="text" name="year" id="year" placeholder='year'/>
            <input type="text" name="subgenre" id="subgenre" placeholder='subgenre'/>
            <input type="text" name="poster" id="poster" placeholder='poster url'/>
            <input type="text" name="director" id="director" placeholder='director'/>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Add