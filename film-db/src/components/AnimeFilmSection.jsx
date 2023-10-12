import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

  const AnimeFilmSection = ({films}) => {
    const [filteredFilms, setFilteredFilms] = useState([])
    useEffect(() => {
      setFilteredFilms(films?.filter(film =>film.fields.genre === 'anime'))
    
    }, [films])
    
    return (
      films.length > 0 &&
      <>
      <div>
      <FilmCarousel>
        { filteredFilms?.map(film =>
          <div className='carousel-image' key={crypto.randomUUID()}>
              <FilmCard  film={film}/>
          </div>
      )}
      </FilmCarousel>
            </div>
            </>
    )
  }


export default AnimeFilmSection