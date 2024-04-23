import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Inicio_card_prof from "./inicio_card_ayudante";

function inicio_carusel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carosel-container">
      <Carousel responsive={responsive}>
        <Inicio_card_prof />
        <Inicio_card_prof />
        <Inicio_card_prof />
        <Inicio_card_prof />
        <Inicio_card_prof />
        <Inicio_card_prof />
        <Inicio_card_prof />
        <Inicio_card_prof />
      </Carousel>
    </div>
  );
}

export default inicio_carusel;
