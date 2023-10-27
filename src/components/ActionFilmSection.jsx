import {useEffect,useState} from 'react'
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

const ActionFilmSection = ({films}) => {
    // const [filteredFilms, setFilteredFilms] = useState([])
    // console.log(films)  ;
    // useEffect(() => {
    //   films.length && setFilteredFilms(films.filter(film => film.genre === 'action'))  
    // }, [films])    
    console.log(films)  
    const filteredFilms= films.length>0 ? films.filter(film => film.genre === 'Action'): [];
    console.log(filteredFilms)
    // const carStyle={background:"green", display:"block",marginTop:"300px"}
    return (
      filteredFilms?.length > 0 &&
      <>
        <div>
        <h2 className='text-3xl ml-3 font-bold text-red-700 '>Action</h2>
        <FilmCarousel>
          {filteredFilms?.map(film =>          
              <FilmCard key={crypto.randomUUID()} film={film}/>         
          )}
          {/* these r {children} in film carousel component */}
        </FilmCarousel>
        </div>
      </>
    )
  }
export default ActionFilmSection
