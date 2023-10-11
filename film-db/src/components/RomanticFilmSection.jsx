import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const RomanticFilmSection = ({films}) => {
  const [filteredFilms, setFilteredFilms] = useState([])
    
  useEffect(() => {
    films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'romantic'))  
  }, [films])
    
  return (
  filteredFilms.length &&
    <>
      <h3>Romantic</h3>
      <FilmCarousel>
        {filteredFilms?.map(film =>
          <div className='carousel-image' key={crypto.randomUUID()}>
            <FilmCard film={film}/>
          </div>
        )}
      </FilmCarousel>
    </>
  )
}

export default RomanticFilmSection;