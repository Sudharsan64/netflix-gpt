import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const Secondarycontainer = () => {
    const movies = useSelector((state) => state.movies)
    return (
        movies && (
                    <div className="bg-black">
                        <div className="-mt-52 pl-12 relative z-20">
                        <MovieList title={"Now playing movies"} movies={movies.nowPlayingMovies} />
                        <MovieList title={"Popular movies"} movies={movies.popularMovies} />
                        <MovieList title={"Top rated movies"} movies={movies.topRatedMovies} />
                        <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} />
                        </div>
                    </div>    
        )
    )
}
export default Secondarycontainer; 