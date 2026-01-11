import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constants";


const useNowPlayingMovies = () => {
     const dispatch=useDispatch();
  const NowPlayingMovies = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
      api_options);
      const json=await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
      };
      useEffect(() => {
        NowPlayingMovies();
      }, []);
};
export default useNowPlayingMovies;