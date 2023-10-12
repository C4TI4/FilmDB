import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const ComedyFilmSection = ({films}) => {
  const [filteredFilms, setFilteredFilms] = useState([])
    
  useEffect(() => {
    films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'comedy'))  
  }, [films])
  
    // const carstyle={background:"red"}

  return (
  filteredFilms?.length > 0 &&
    <>
    <div style={{ backgroundColor: "red", display:"block", minHeight:"300px"}}>
      <h3>Comedy</h3>
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

export default ComedyFilmSection;