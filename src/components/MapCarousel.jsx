import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MapCarousel = ({ maps }) => {
  // eslint-disable-next-line
  if (!maps) return;
  return (
    <Carousel
      axis="horizontal"
      showArrows
      autoPlay
      showStatus={false}
      interval={2000}
      showIndicators={false}
      showThumbs={false}
      emulateTouch
      swipeable
      className="w-full flex justify-center cursor-grab"
    >
      {maps.map((map) => (
        <div className="relative flex justify-center" key={map.displayName}>
          <img className="w-full" src={map.splash} alt={map.displayName}></img>
          <p className="absolute bottom-0 py-1 text-lg bg-blue-dark/75 w-full sm:text-xl md:text-2xl md:py-2 lg:text-4xl">
            {map.displayName}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default MapCarousel;
