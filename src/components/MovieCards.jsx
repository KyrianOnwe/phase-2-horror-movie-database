import React from 'react'

const MovieCards = ({ movie, id, url, subgenre, year, director, isWatched }) => {
  

  return (
    <div id={id} onClick={() => isWatched(id)}>
      <img src={url} />
      <h3>{movie}</h3>
      <p>A {subgenre} horror film, from {year}.  Directed by {director} </p>
    </div>
  )
}

export default MovieCards