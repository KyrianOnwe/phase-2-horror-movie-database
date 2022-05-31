import React from 'react'
import MovieCards from './MovieCards'

const Movies = (props) => {
  const movies = props.movies;
  console.log(movies)

  return (
    <div>
      {movies.length === 0 ? <h1>Let's get some movies!</h1> : movies.map((movie) => <MovieCards movie={movie.title} id={movie.id} url={movie.poster} subgenre={movie.subgenre} year={movie.year} director={movie.director} isWatched={props.isWatched} key={movie.id} /> )}
    </div>
  )
}

export default Movies