import React from 'react'
import MovieCards from './MovieCards'

const Watched = (proops) => {
  const watched = proops.watched
  // console.log(watched)

  return (
    <div>
      {watched.length === 0 ? <h1>{proops.message}</h1> : watched.map((w) => <MovieCards movie={w.title} id={w.id} url={w.poster} subgenre={w.subgenre} year={w.year} director={w.director} key={w.id} isWatched={proops.isWatched}/> )}
    </div>
  )
}

export default Watched