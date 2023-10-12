// import FilmCard from './FilmCard';
import Trending from '../components/Trending'
// import NavBar from '../components/NavBar';

const TrendingPage = ({ films }) => {
  // fetch all state and data using fetch or axios

//   {allFilms.filter(film => film.genre === 'comedy').map(
//     film => <FilmCard key={film.id} {...film} />
// )}

  return (
    <>
      {/* <NavBar /> */}
      <h1 className='text-4xl font-bold'>Trending</h1>
      <Trending films={films} />
    </>
  )
}

export default TrendingPage;



 



