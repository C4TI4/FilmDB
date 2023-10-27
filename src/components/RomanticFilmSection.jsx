// import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const RomanticFilmSection = ({films}) => {
      // const [filteredFilms, setFilteredFilms] = useState([])
      
      // useEffect(() => {
      //   films.length && setFilteredFilms(films.filter(film => film.fields.genre === 'romantic'))  
      //   }, [films])

      // console.log(filteredFilms); 
      const filteredFilms= films.length>0 ? films.filter(film => film.genre === 'Romance'): [];
      return (
        filteredFilms.length >0 &&
        <>
          <div>
            <h2 className='text-3xl ml-3 font-bold text-red-700'>Romance</h2>
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