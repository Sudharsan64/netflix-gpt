
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { api_options } from "../utils/constants";

const useMoviesBackgroundVideo = (movieId) => {
    const dispatch = useDispatch();
  const GetBackgroundVideo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", api_options)
    const json = await data.json()
    const filterData= json.results.filter((video) => video.type === "Trailer")
    const trailer = filterData.length ?  filterData[1] : json.results[0];
    console.log(trailer)
    dispatch(addTrailerVideo(trailer));

  }
  useEffect(() => {
    GetBackgroundVideo()
  }, [])
}
export default useMoviesBackgroundVideo;