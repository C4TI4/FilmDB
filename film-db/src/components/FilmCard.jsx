
const FilmCard = ({film} ) => {
    const {fields}=film
    console.log(film);
    // console.log(filmName,imageSrc,year, genre);
    return (

        // card-body gap-6 text-center
        <div className='mx-2 my-5 card w-99 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'
            onClick={()=>{}} >
                
                <figure className='h-[70%] overflow-hidden'>
                        <img src={fields?.imageSrc} alt='film-poster' className='object-cover' />
                </figure>             
                <h2 className='card-title'>{fields?.filmName}</h2>
                <div>{fields?.genre}</div>
                <p>{fields?.year}</p>                
        </div> 
    )}    

  export default FilmCard