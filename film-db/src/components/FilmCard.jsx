<<<<<<< HEAD
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
=======
const FilmCard = ({ film }) => {
    const { fields } = film

    // console.log(film);
    // console.log(filmName,imageSrc,year, genre);
    return (
        // card-body gap-6 text-center
        <div className='mx-2 my-5 card w-99 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'>
                
                <figure className='h-[70%] overflow-hidden'>
                        <img src={fields?.imageSrc} alt='film-poster' className='object-cover' />
                </figure>             
                <h2 className='card-title'>{fields?.filmName}</h2>
                <div>{fields?.genre}</div>
                <p>{fields?.year}</p>                
        </div> 
    )}    
>>>>>>> bc5515054412bc8c92178e44331b525c66dd9931

export default FilmCard;
