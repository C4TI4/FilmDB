/* eslint-disable react/prop-types */

// import FilmCard from './FilmCard';
import ComedyFilmSection from "./ComedyFilmSection";
import ActionFilmSection from "./ActionFilmSection";
import RomanticFilmSection from "./RomanticFilmSection";
import AnimeFilmSection from "./AnimeFilmSection";

const Trending = ({ films }) => {
  // fetch all state and data using fetch or axios
  //   {allFilms.filter(film => film.genre === 'comedy').map(
  //     film => <FilmCard key={film.id} {...film} />
  // )}

  return (
    <>
      <h1> Trending </h1>
      <ComedyFilmSection films={films} />
      {/* <ActionFilmSection {...films}/>
    <RomanticFilmSection {...films}/>
    <AnimeFilmSection {...films}/> */}
    </>
  );
};

export default Trending;
