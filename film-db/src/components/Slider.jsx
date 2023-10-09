import { useState, useEffect, useCallback } from "react";
import { client } from "../lib/contentfulClient";
import Carousel from "./Carousel";

const Slider = () => {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideBg };
      return updatedSlide;
    });

    setCarouselSlides(cleanSlides);
  }, []);

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "movieCarousel",
      });
      const responseData = response.items;
      console.log(responseData);
      if (responseData) {
        cleanUpCarouselSlides(responseData);
      } else {
        setCarouselSlides([]);
      }
      setIsCarouselLoading(false);
    } catch (error) {
      console.error(error);
      setIsCarouselLoading(false);
    }
  }, [cleanUpCarouselSlides]);
  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);
  return (
    <>
      {carouselSlides.map((item) => {
        const { id, slideBg, slideTitle, slideDescription } = item;
        return (
          <Carousel
            key={id}
            slideTitle={slideTitle}
            slideDescription={slideDescription}
            slideBg={slideBg}
          />
        );
      })}
    </>
  );
};

export default Slider;
