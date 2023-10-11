/* eslint-disable react/prop-types */

const FilmCard = ({ film }) => {
  const { fields } = film;
  console.log(film);
  // console.log(filmName,imageSrc,year, genre);
  return (
    <div
      className="card w-96 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all"
      onClick={() => {}}
    >
      Hello
      <div>{fields?.filmName}</div>
      <div>{fields?.genre}</div>
      <img src={fields?.imageSrc} alt="film-poster" className="object-cover" />
      <div>{fields?.year}</div>
      {/* <figure className='h-[70%] overflow-hidden'>
                <img src={imageSrc} alt='film-poster' className='object-cover' />
            </figure>
            <div className='card-body gap-6 text-center'>
                <h2 className='card-title'>
                {filmName&&filmName}
                </h2>            
                <p>{year}</p>
            </div> */}
    </div>
  );
};

export default FilmCard;
