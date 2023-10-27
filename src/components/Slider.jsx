// import { useState, useEffect, useCallback } from "react";
// import { client } from "../lib/contentfulClient";
import Carousel from "./Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

SwiperCore.use([Navigation]);

const Slider = ({films}) => {
  // const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  // const [carouselSlides, setCarouselSlides] = useState([]);



  // useEffect(() => {
  //   const getCarouselSlides = async () => {
  //     const response = await fetch("https://films-api-0zaj.onrender.com/films");
  //     const responseData = await response.json();
  //     console.log("input data received:", responseData);
  //   };
  //   getCarouselSlides();
  // }, []);

  return (
    <>
      <div className="carousel">
        <Swiper navigation>
          {films.map((item) => {
            // const { id, slideBg, slideTitle, slideDescription } = item;
            return (
              <SwiperSlide key={item.movie_id}>
                <Carousel
                  slideTitle={item.filmname}
                  slideDescription={item.description}
                  slideBg={item.imagesrc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;




 // when fetching from contentful
  //   const cleanUpCarouselSlides = useCallback((rawData) => {
  //     const cleanSlides = rawData.map((slide) => {
  //       const { sys, fields } = slide;
  //       const { id } = sys;
  //       const slideTitle = fields.title;
  //       const slideDescription = fields.description;
  //       const slideBg = fields.image.fields.file.url;
  //       const updatedSlide = { id, slideTitle, slideDescription, slideBg };
  //       return updatedSlide;
  //     });
  //
  //     setCarouselSlides(cleanSlides);
  //   }, []);
  // ------------------------------------------------------
  // const getCarouselSlides = useCallback(async () => {
  //   setIsCarouselLoading(true);
  //   try {
  //     const response = await client.getEntries({
  //       content_type: "movieCarousel",
  //     });
  //     const responseData = response.items;
  //     console.log(responseData);
  //     if (responseData) {
  //       cleanUpCarouselSlides(responseData);
  //     } else {
  //       setCarouselSlides([]);
  //     }
  //     setIsCarouselLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setIsCarouselLoading(false);
  //   }
  // }, [cleanUpCarouselSlides]);
  // useEffect(() => {
  //   getCarouselSlides();
  // }, [getCarouselSlides]);
  // -----------------------------------------------------------------------
