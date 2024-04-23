import Carousel from "react-bootstrap/Carousel";

function InicioCarrusel() {
  return (
    <div className="Slider_margin">
      <Carousel className="Slider">
        <Carousel.Item className="Slider">
          <img
            className="d-block w-100"
            src="src/assets/WhatsApp Image 2023-11-07 at 22.41.30.jpeg"
            alt="Primera Imagen"
          />
        </Carousel.Item>
        <Carousel.Item className="Slider">
          <img
            className="d-block w-100"
            src="src/assets/WhatsApp Image 2023-11-07 at 22.41.28.jpeg"
            alt="Segunda Imagen"
          />
        </Carousel.Item>
        <Carousel.Item className="Slider">
          <img
            className="d-block w-100"
            src="src/assets/WhatsApp Image 2023-11-07 at 22.41.29.jpeg"
            alt="Tercera Imagen"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default InicioCarrusel;
