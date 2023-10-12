
const FilmCard = ({film} ) => {
    const {fields}=film
    // console.log(filmName,imageSrc,year, genre);
    const imgStyle= {
        backgroundImage:`url(${fields?.imageSrc})`, 
        minHeight:"200px",
        minWidth:"300px",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
    }
    return (

        // card-body gap-6 text-center
        <div className='mx-2 my-5 card w-99 bg-gray-900 min-h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'
            onClick={()=>{}} >
                <h2 className='card-title'>{fields?.filmName}</h2>
                <div>{fields?.genre}</div>
                <p>{fields?.year}</p>  
                <figure className='min-h-[100%] overflow-hidden bg-red' style={imgStyle}>
                {/* <figure className='h-[70%] overflow-hidden bg-red' style={{backgroundImage: `url(${fields?.imageSrc})`}}> */}
                        {/* <img src={fields?.imageSrc} width={100} alt='film-poster' className='object-cover' /> */}
                </figure>       
                {/* <div className='h-[70%] overflow-hidden bg-red' style={imgStyle}></div> */}
                              
        </div> 
    )}    

  export default FilmCard