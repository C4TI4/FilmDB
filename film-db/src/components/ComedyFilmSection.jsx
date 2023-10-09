
  const ComedyFilmSection = ({ allComedyFilms }) => {
  return (
    <section id='films'>
      <h1 className='text-3xl text-center my-16 mb-10'>
            Comedy         
      </h1>
      <div id='filmCards' className='flex flex-wrap gap-4 justify-center p-10'>
        {allComedyFilms.map((Comedyfilm) => (
          <ComedyFilmCard key={comedyFilm.id} {...comedyFilm} />
        ))}
{/* film= filmName, imgSrc;      key is a way in react to identify each duck */}

        {/* component <FilmCard {...allFilms[0]} />
        <FilmCard {...allFilms[1]} /> */}
      </div>
    </section>
  );
};

export default ComedyFilmSection;