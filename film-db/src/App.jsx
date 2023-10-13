
import { useState,useEffect} from 'react';
import {Routes,Route} from "react-router-dom"
import TrendingPage from './pages/TrendingPage';
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFound from './pages/NotFound.jsx';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import SingleFilmPg3 from './components/SingleFilmPg3 ';
import client from "./lib/contentfulClient";
// FilmCard is collection of all films in contentful
import 'react-multi-carousel/lib/styles.css';

const App = () => {
  // const [CarouselLoading, setCarouselLoading]= useState(false)
  const [films, setFilms] = useState([]);
  // null or array?
  const getSlides = async () => {
    try {
      const response = await client.getEntries({
        content_type: "filmCard",
      });
      // .getEntries() is a method to get all entries
      // content_type is id of filmCard---u find copy id beside it in contentful
      const responseData = response.items;
      setFilms(responseData);
      // in browser console when u expand array, u find items which u need to get
      // u will not see console from browser. u need use useEffect.
      return response;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {getSlides()
  }, [])
  
return (
  <>
  <NavBar/>
  <Routes>
  {/* <Route path='' element={}/> */}
  <Route path='/' element={<LandingPage />} />
  <Route path='/trending' element={<TrendingPage films={films} />} />   
  <Route path='*' element={<NotFound />} /> 
  <Route path='login' element={<LoginPage />}/>
  <Route path='signup' element= {<SignUpPage/>}/>
</Routes>
<Footer/>
  </>
  );
};

export default App;
