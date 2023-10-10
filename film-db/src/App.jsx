import { useState,useEffect, useCallback } from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import Trending from './components/Trending';
// import SingleFilmPg3 from './components/SingleFilmPg3 ';

import  client  from './lib/contentfulClient';
// FilmCard is collection of all films
import 'react-multi-carousel/lib/styles.css';



const App = () => {
  // const [CarouselLoading, setCarouselLoading]= useState(false)
  const [slides, setSlides] = useState([])
  // null or array?

  // if useCallback function is not used, u get warnings in code
  const getSlides = useCallback( async () => {
    try {
      const response = await client.getEntries({
        content_type: 'filmCard',
      });

      // .getEntries() is a method to get all entries
  
      // content-type is id of filmCard---u find copy id beside it in contentful
      const responseData = response.items
      // in browser console when u expand array, u find items which u need to get
      console.log(responseData);
      // u will not see console from browser. u need use useEffect. 
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }, [])

  useEffect(() => {
    getSlides()
  }, [getSlides])
  

//   useEffect(() => {
//     const fetchData= async () => {
//     try{
//     const getFilmData= await fetch(
//       'https://cdn.contentful.com/spaces/gwp51gar4wfb/environments/master/entries?access_token=em2LoVg8vTVQJlAIgQpARAigO4zS715njiG3S_jLwTA'
//     )
//       if (!getFilmData.ok)
//       throw new Error(
//           'The request failed with a status of '+ getFilmData.status
//         );
//         const parsedFilms = await getFilmData.json();

//         console.log (parsedFilms);

//         setAllFilms(parsedFilms);

//     }catch((error) => console.error(error));
//   }, []);


// }


  return (
    <div className=''>
      <NavBar /> 

      {/* <Trending  allFilms={allFilms}/>  */}
      {/* <SingleFilmPg3/> */}

    </div>
  )
}

export default App
