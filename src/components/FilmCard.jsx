const FilmCard = ({ film }) => {
  const {filmname, imagesrc, year, description}= film;
  // blue underlines r just spell check not error
  
  console.log(filmname, imagesrc, year);
  
  
  return (
    // card-body gap-6 text-center

    // <Link to={`/${fields?.filmName}`}
    <div className="mx-4 mt-10 mb-16 hover:cursor-pointer hover:scale-[102%] transition-all duration-300 text-center">
      <figure>
    
        <img
          src={imagesrc}
          alt="film-poster"
          className="object-cover h-96 rounded-xl overflow-hidden block mx-auto"
        />
      </figure>
      <h2 className="text-xl text-left mt-4">{filmname}</h2>
      <p className="text-xs text-white text-left font-light ">{description}</p>
      <p className="text-xs text-white text-left font-light">{year}</p>
    </div>
    // </link>
  );
};

export default FilmCard;
