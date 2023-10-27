import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const AnimeFilmSection = ({films}) => {
  // const [filteredFilms, setFilteredFilms] = useState([])
    
  // useEffect(() => {
  //   films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'anime'))  
  // }, [films])
  const filteredFilms= films.length>0 ? films.filter(film => film.genre === 'Anime'): [];  
  return (
    filteredFilms?.length >0 &&
      <>
        <div>
        <h2 className='text-3xl ml-3 font-bold text-red-700'>Anime</h2>
        <FilmCarousel>
          {filteredFilms?.map(film =>          
              <FilmCard key={crypto.randomUUID()} film={film}/>         
          )}
        </FilmCarousel> 
        </div>         
      </>
  )
}


export default AnimeFilmSection;