
const FilmCard = (filmName,) => {
    console.log(props);
    return (
      <div
        className='card w-96 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'
        onClick={()=>{}}
      >
        <figure className='h-[70%] overflow-hidden'>
          <img src={imgSrc} alt='film-poster' className='object-cover' />
        </figure>
        <div className='card-body gap-6 text-center'>
          <h2 className='card-title'>
           {filmName}
           </h2>
         
         <p>Year</p>
       </div>
       </div>
    );
  };

  export default FilmCard