import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Trending from './components/Trending';
// import SingleFilmPg3 from './components/SingleFilmPg3 ';
import getData from './lib/contentfulClient';
// import RCarousel from './components/RCarousel';

function App() {
  useEffect(() => {
    getData();
  }, []); 
  return (
    <div className=''>
      <NavBar /> 
      <Trending /> 
      {/* <SingleFilmPg3 /> */}

    </div>
  )
}

export default App
