import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const RomanticFilmSection = ({films}) => {
      const [filteredFilms, setFilteredFilms] = useState([])
      
      useEffect(() => {
        films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'romantic'))  
        }, [films])

      console.log(filteredFilms); 

      return (
        filteredFilms.length >0 &&
        <>
          <div>
            <h2>Romantic</h2>
            <FilmCarousel>
              {filteredFilms?.map(film =>          
                  <FilmCard key={crypto.randomUUID()} film={film}/>          
              )}
            </FilmCarousel>
          </div>
        </>
      )
  }



export default RomanticFilmSection;