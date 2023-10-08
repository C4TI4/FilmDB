import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import getData from './Hooks/useContentful';
import RCarousel from './components/RCarousel';

function App() {
  const [count, setCount] = useState(0)
  getData()
  return (
    <div className=''>
      <NavBar /> 
      <RCarousel/> 
    </div>
  )
}

export default App
