import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Inicio_card_ayudante from "./inicio_card_ayudante";

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

  const ayudantes = [
    {
      id: 1,
      nombre: "Hans Barnert",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },

    {
      id: 2,
      nombre: "Benjamin Eolo",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },

    {
      id: 3,
      nombre: "Aldo Jimenez",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },

    {
      id: 4,
      nombre: "Cristobal Quijanes",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },
    {
      id: 5,
      nombre: "Cristobal Quijanes",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },
    {
      id: 6,
      nombre: "Cristobal Quijanes",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },
    {
      id: 7,
      nombre: "Cristobal Quijanes",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },
    {
      id: 8,
      nombre: "Cristobal Quijanes",
      descripcion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit Natus commodi quo sunt quaerat amet nobis eaque vel nisi provident optio perferendis veniam dolor eos beatae dicta nemo ad tenetur doloremque",
      imgURL: "src/assets/persona_aleatoria.jpg",
    },
  ];

  const ayudante = ayudantes.map((item) => (
    <Inicio_card_ayudante 
      nombre={item.nombre}
      descripcion={item.descripcion}
      imgURL={item.imgURL}
    />
  ));

  return (
    <div className="carrusel_ayudantes_margin">
      <div className="carusel-container">
        <Carousel responsive={responsive}>{ayudante}</Carousel>
      </div>
    </div>
  );
}

export default inicio_carusel;
