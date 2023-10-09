/* eslint-disable react/prop-types */
// import { useState } from "react";

const Carousel = (props) => {
  //   const [carouselSlides, setCarouselSlides] = useState([]);
  const { id, slideTitle, slideDescription, slideBg } = props;
  return (
    <>
      <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})` }}>
        <div className="textWrap">
          <h2>{slideTitle}</h2>
          <p>{slideDescription}</p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
