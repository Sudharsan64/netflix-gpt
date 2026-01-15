import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";
import { api_options } from "../utils/constants";


const useTopratedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTopratedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        api_options);
      const json = await data.json();

      dispatch(addTopratedMovies(json.results));
    };
    getTopratedMovies();
  }, [dispatch]);
};
export default useTopratedMovies;