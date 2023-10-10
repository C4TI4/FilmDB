
import FilmCard from "./FilmCard";
import FilmCarousel from "./FilmCarousel";

  const ComedyFilmSection = ({films}) => {
    
    return (
      films.length &&
   <FilmCarousel>
    { films.filter(film =>film.fields.genre === 'comedy').map(
      film =><div className='carousel-image' key={crypto.randomUUID()}>
        <FilmCard  {...film}/></div>
   )}
   </FilmCarousel>
    // <section id='films'>
    //   <h1 className='text-3xl text-center my-16 mb-10'>
    //         Comedy         
    //   </h1>
    //   <div id='filmCards' className='flex flex-wrap gap-4 justify-center p-10'>
       
       
//         {allFilms.map((film) => (
//           <FilmCard key={film.id} {...film} />
//         ))}
// {/* film= filmName, imgSrc;      key is a way in react to identify each duck */}

//         {/* component <FilmCard {...allFilms[0]} />
//         <FilmCard {...allFilms[1]} /> */}
//       </div>
//     </section>
  );
};

export default ComedyFilmSection;