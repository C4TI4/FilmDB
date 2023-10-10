
// import FilmCard from './FilmCard';
import ComedyFilmSection from './ComedyFilmSection';
import ActionFilmSection from './ActionFilmSection';
import RomanticFilmSection from './RomanticFilmSection';
import AnimeFilmSection from './AnimeFilmSection';


const Trending = ({  }) => {
const [allMovies, AllMovies] = useState([])
  // fetch all state and data using fetch or axios

  {allFilms.filter(film => film.genre === 'comedy').map(
    film => <FilmCard key={film.id} {...film} />
)}

  return (
    <>
    <h1> Trending </h1>
    <ComedyFilmSection />
    <ActionFilmSection />
    <RomanticFilmSection />
    <AnimeFilmSection />

    </>
  )}



export default Trending;



 



