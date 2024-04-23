import React from 'react';
import Actividades_cards from './actividades_cards'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function actividades_tabla() {

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

    const actividades =[
        {
            id: 1,
            titulo: "Limpiando el lab",
            descripcion: "Dia de limpieza del laboratorio",
            imgUrl: "src/assets/fotolab1.jpg",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat."},    
        {
            id: 2,
            titulo: "Reunion final",
            descripcion: "Realización de reunion de despedida",
            imgUrl: "src/assets/fotolab2.jpg",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat."},      
        {
            id: 3,
            titulo: "Experiencia redes",
            descripcion: "Experiencia guiada acerca de redes",
            imgUrl: "src/assets/fotolab3.jpg",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat."},      
        {
            id: 4,
            titulo: "Investidura UAI",
            descripcion: "Bienvenida a los nuevos estudiantes",
            imgUrl: "src/assets/fotolab4.jpg",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat."},   
        {
            id: 5,
            titulo: "Convivencia",
            descripcion: "convivencia",
            imgUrl: "src/assets/fotolab5.jpg",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat."},
        {
            id: 6,
            titulo: "Taller de robótica",
            descripcion: "robots!",
            imgUrl: "src/assets/fotolab6.jpg",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat."},
    ]

    const actividad = actividades.map((item) => (
        <Actividades_cards 
          Act={item.titulo}
          Desc={item.descripcion}
          imgURL={item.imgUrl}
          info={item.info}
        />
      ));

  return (
    <div>
      <div className="carrusel_ayudantes_margin">
    <div className="carusel-container">
      <Carousel responsive={responsive}>{actividad}</Carousel>
    </div>
  </div>
  </div>
  )
}

export default actividades_tabla