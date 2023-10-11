import {useState} from 'react';
// import FilmCard from './FilmCard';
import ComedyFilmSection from '../components/ComedyFilmSection';
import ActionFilmSection from '../components/ActionFilmSection';
import RomanticFilmSection from '../components/RomanticFilmSection';
import AnimeFilmSection from '../components/AnimeFilmSection';
import NavBar from '../components/NavBar';


const Trending = ({ films }) => {
const [allMovies, AllMovies] = useState([])
  // fetch all state and data using fetch or axios

//   {allFilms.filter(film => film.genre === 'comedy').map(
//     film => <FilmCard key={film.id} {...film} />
// )}

  return (
    <>
      <NavBar />
      <h1>Trending</h1>
      <ComedyFilmSection />
      <ActionFilmSection />
      <RomanticFilmSection />
      <AnimeFilmSection />
    </>
  )
}

export default Trending;



 



