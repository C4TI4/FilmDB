import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Trending from './components/Trending';
import SingleFilmPg3 from './components/SingleFilmPg3 ';
// import getData from './Hooks/useContentful';
// import RCarousel from './components/RCarousel';

function App() {
  // const [count, setCount] = useState(0)
  // getData()
  return (
    <div className=''>
      <NavBar /> 
      <Trending/> 
      <SingleFilmPg3/>

    </div>
  )
}

export default App
