import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterpath }) => {
  return (
    <div className='w-48 pr-4 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
      <img alt="Moviecard" src={IMG_CDN_URL + posterpath} />
    </div>
  )
}

export default MovieCard