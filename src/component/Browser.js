
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
const Browser = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Header />
    <Maincontainer/>
    </div>
  )
}

export default Browser;