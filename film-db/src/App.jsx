import { useState, useEffect } from "react";
import "./App.css";
// import NavBar from './components/NavBar';
import Trending from "./components/Trending";
// import SingleFilmPg3 from './components/SingleFilmPg3 ';
import client from "./lib/contentfulClient";
// FilmCard is collection of all films in contentful
import "react-multi-carousel/lib/styles.css";
import LandingPage from "./pages/LandingPage";

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

  useEffect(() => {
    getSlides();
  }, []);

  return (
    <div className="">
      <LandingPage />
      <Trending films={films} />
      {/* <SingleFilmPg3/> */}
    </div>
  );
};

export default App;
