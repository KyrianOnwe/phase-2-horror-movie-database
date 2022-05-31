import React from 'react'
import MovieCards from './MovieCards'

const Watched = ({ message, watched, isWatched }) => {

  return (
    <div>
      {watched.length === 0 ? <h1>{message}</h1> : watched.map((w) => <MovieCards movie={w.title} id={w.id} url={w.poster} subgenre={w.subgenre} year={w.year} director={w.director} key={w.id} isWatched={isWatched}/> )}
    </div>
  )
}

export default Watched