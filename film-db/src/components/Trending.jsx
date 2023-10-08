// import  {Container} from 'react-bootstrap'

// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;

import FilmCard from './FilmCard';

const Trending = ({ allFilms }) => {
  return (
    <section id='films'>
      <h1 className='text-3xl text-center my-16 mb-10'>
            Trending         
      </h1>
      <div id='filmCards' className='flex flex-wrap gap-4 justify-center p-10'>
        {allFilms.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
        {/* component <FilmCard {...allFilms[0]} />
        <FilmCard {...allFilms[1]} /> */}
      </div>
    </section>
  );
};


export default Trending;



 



