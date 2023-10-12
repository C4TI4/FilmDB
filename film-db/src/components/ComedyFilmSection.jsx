import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const ComedyFilmSection = ({films}) => {
  const [filteredFilms, setFilteredFilms] = useState([])
    
  useEffect(() => {
    films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'comedy'))  
  }, [films])

  return (
    filteredFilms?.length > 0 &&
      <>
        {/* <div style={{ backgroundColor: "red", minHeight:"300px"}}>  */}
        <div>   
          <h2>Comedy</h2>
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