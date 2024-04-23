import React from "react";

function Inicio_card_prof(props) {
  return (
    <div className="card-wrapper">
    <div className="card-gen">
      <div className="image-content">
        <span className="overlay-img"></span>

        <div className="card-image">
          <img
            src={props.imgURL}
            alt=""
            className="card-img"
          />
        </div>
        
        <div className="card-content">
          <h2 className="nombre">{props.nombre}</h2>
          <p className="descripcion">
            {props.descripcion}
          </p>
          <button className="boton_view">Ver Mas</button>
        </div>
      </div>
    </div> 
  </div>
  );
}

export default Inicio_card_prof;
