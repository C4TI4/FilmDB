import Carousel from 'react-multi-carousel';

const FilmCarousel = ({children}) => {

  return (
    <div style= {{width: '80vw'}}>
      <Carousel cols={3} rows={1} gap={10} loop
        swipeable={false}
        responsive={
          {desktop: {
              breakpoint : { max: 800, min: 460 }, 
              items: 3
              }
          }}
        draggable={false}
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
  )
}

export default FilmCarousel