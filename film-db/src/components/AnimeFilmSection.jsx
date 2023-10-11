import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const AnimeFilmSection = ({films}) => {
  const [filteredFilms, setFilteredFilms] = useState([])
    
  useEffect(() => {
    films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'anime'))  
  }, [films])
    
  return (
  filteredFilms.length &&
    <>
      <h3>Anime</h3>
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

export default AnimeFilmSection;