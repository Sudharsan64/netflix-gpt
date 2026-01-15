import { useSelector } from "react-redux";
import useMoviesBackgroundVideo from "../hooks/useMoviesBackgroundVideo";

const BackgroundVideo = ({ movieid }) => {
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
  useMoviesBackgroundVideo(movieid);

  if (!trailerVideo) return null;

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-full h-full scale-150 pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo.key +
          "&modestbranding=1&playsinline=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      ></iframe>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default BackgroundVideo;
