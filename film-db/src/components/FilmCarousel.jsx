import Carousel from 'react-multi-carousel';

const FilmCarousel = () => {

 


  return (
    
<div style= {{width: '80vw'}}>
  <Carousel cols={4} rows={1} gap={5} loop
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={3000}
    //  {false}---if dont want autoplay
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    responsive = {{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }};
  >

{/* use function to fetch data, DRY, item is each film */}
    <Carousel.item className='carousel-image'>Item 1</Carousel.item>
    <div className='carousel-image'>Item 2</div>
    <div className='carousel-image'>Item 3</div>
    <div className='carousel-image'>Item 4</div>
  </Carousel>
</div>
  )
}

export default FilmCarousel