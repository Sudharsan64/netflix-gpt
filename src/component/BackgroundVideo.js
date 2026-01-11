
import {  useSelector } from "react-redux"
import useMoviesBackgroundVideo from "../hooks/useMoviesBackgroundVideo"
const BackgroundVideo = ({movieid}) => {
  const trailerVideo = useSelector((state) => state.movies.trailerVideo); 
  useMoviesBackgroundVideo(movieid);
  return (
    <div className="absolute top-0 left-0 right-0 -z-10 bg-gradient-to-r from-black">
      <iframe 
      className="w-screen aspect-video" 
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen ></iframe>
    </div>
  )
}


export default BackgroundVideo