import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const ComedyFilmSection = ({films}) => {
  // const [filteredFilms, setFilteredFilms] = useState([])
    
  // useEffect(() => {
  //   films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'comedy'))  
  // }, [films])
  const filteredFilms= films.length>0 ? films.filter(film => film.genre === 'Comedy'): [];
  return (
    filteredFilms?.length > 0 &&
      <>
        {/* <div style={{ backgroundColor: "red", minHeight:"300px"}}>  */}
        <div>   
          <h2 className='text-3xl ml-3 font-bold text-red-700'>Comedy</h2>
          <FilmCarousel>
            {filteredFilms?.map(film =>
              <FilmCard key={crypto.randomUUID()} film={film}/>
            )}
          </FilmCarousel>
        </div>
      </>
  )
}

export default ComedyFilmSection;