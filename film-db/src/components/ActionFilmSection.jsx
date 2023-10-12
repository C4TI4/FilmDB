import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

  const ActionFilmSection = ({films}) => {
    const [filteredFilms, setFilteredFilms] = useState([])
    useEffect(() => {
      setFilteredFilms(films?.filter(film =>film.fields.genre === 'action'))
    
    }, [films])
    
    const carStyle={background:"green", display:"block",marginTop:"300px"}
    return (
      films.length > 0 &&
      <>
      <div style={carStyle}>
<h2>Action</h2>
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
export default ActionFilmSection