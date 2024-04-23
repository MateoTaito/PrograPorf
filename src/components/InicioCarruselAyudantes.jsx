import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InicioCardAyudante from "./InicioCardAyudante";

function inicio_carusel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  // Extraer Informacion Ayudantes - API
  const url = "http://127.0.0.1:8000/ayudantes/"
  const [data , setData] = useState(null)
  useEffect(() => {
    fetch(url).then((response) => response.json())
    .then((data) => setData(data))
  }, [])

  const ayudante = data !== null
  ? data.map(item => (
      <InicioCardAyudante
        key={item.id} 
        nombre={item.nombre}
        descripcion={item.descripcion}
        imgURL={"src/assets/persona_aleatoria.jpg"}
      />
    ))
  : [];


  return (
    <div className="carrusel_ayudantes_margin">
      <div className="carusel-container">
        <Carousel responsive={responsive}>{ayudante}</Carousel>
      </div>
    </div>
  );
}

export default inicio_carusel;
