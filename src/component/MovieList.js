import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title, movies }) => {
 
  return (
    <div  className='p-6'>
      <h1 className='text-white text-3xl p-6 '>{title}</h1>
      <div className='flex overflow-x-scroll '>
        <div className='flex'>
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default MovieList; 