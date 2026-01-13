import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import BackgroundVideo from './BackgroundVideo';

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className='w-screen relative aspect-video'>
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieid={id} />
    </div>
  )
}

export default Maincontainer; 