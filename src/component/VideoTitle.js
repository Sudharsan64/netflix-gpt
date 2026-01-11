import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute top-0 left-0 right-0 z-10 text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='mt-4 w-1/4'>{overview}</p>
      <div className="mt-4 flex">
        <button className='w-20  bg-white text-black py-2 px-4 rounded flex hover:bg-gray-300'>
          ▶ Play</button>
        <button className='ml-4 bg-white text-black py-2 px-4 rounded flex hover:bg-gray-300'>
          More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle