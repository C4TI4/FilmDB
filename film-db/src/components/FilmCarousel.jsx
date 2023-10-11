<<<<<<< HEAD
/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";

const FilmCarousel = ({ children }) => {
  return (
    <div style={{ width: "80vw" }}>
      <Carousel
        cols={3}
        rows={1}
        gap={5}
        loop
        swipeable={false}
        responsive={{
          desktop: {
            breakpoint: { max: 800, min: 460 },
            items: 3,
          },
=======
import Carousel from 'react-multi-carousel';

const FilmCarousel = ({children}) => {
  return (
    <div style={{width: '100vw', height : '20vh', marginBottom: '20px'}}>
      <Carousel 
      cols={3} rows={1} gap={1} loop
        swipeable={false}
        responsive={
          // {desktop: {
          //     breakpoint : { max: 800, min: 460 }, 
          //     items: 3
          //     }
          // }}
         {superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
>>>>>>> bc5515054412bc8c92178e44331b525c66dd9931
        }}
        draggable={false}
        centerMode= {true}
        arrows={true}
        showDots={true}
        infinite={true}
        autoPlay={false}
        //  {false}---if dont want autoplay
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* use function to fetch data, DRY, item is each film */}
        {/* <Carousel.item className='carousel-image'>Item 1</Carousel.item> */}
        {/* <div className='carousel-image'>Item 2</div>
        <div className='carousel-image'>Item 3</div>
        <div className='carousel-image'>Item 4</div> */}
        {children}
      </Carousel>
    </div>
  );
};

export default FilmCarousel;
