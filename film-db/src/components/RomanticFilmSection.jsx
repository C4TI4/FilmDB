import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const RomanticFilmSection = ({films}) => {
  const [filteredFilms, setFilteredFilms] = useState([])
  
 useEffect(() => {films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'romantic'))  
  }, [films])
  console.log(filteredFilms);   
  return (
  filteredFilms.length >0 &&
    <>
    <div>
      <h3>Romantic</h3>
      <FilmCarousel>
        {filteredFilms?.map(film =>
          <div className='carousel-image' key={crypto.randomUUID()}>
            <FilmCard film={film}/>
          </div>
        )}
      </FilmCarousel>

      </div>
      </>
    )
  }



export default RomanticFilmSection;