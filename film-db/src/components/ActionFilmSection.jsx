import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

  const ActionFilmSection = ({films}) => {
    const [filteredFilms, setFilteredFilms] = useState([])
    useEffect(() => {
      setFilteredFilms(films?.filter(film =>film.fields.genre === 'action'))
    
    }, [films])
    
    return (
      films.length > 0 &&
      <FilmCarousel>
        { filteredFilms?.map(film =>
          <div className='carousel-image' key={crypto.randomUUID()}>
              <FilmCard  film={film}/>
          </div>
      )}
      </FilmCarousel>
    )
  }
export default ActionFilmSection