import React from "react";
import "../styles.css"

function Actvididades_cards(props) {
  
  return (
    <div className="actv-body">
      <div className="actv-card">
        <img src={props.imgURL} alt="" className="actv-img" />
        <div className="actv-desc">
          <h1 className="act-title">{props.Act}</h1>
          <p className="act-subtitle">{props.Desc}</p>
          <p className="act-info">
            {props.info}
          </p>
          <button className="act-button">Ver mas</button>
        </div>
      </div>
    </div>
  );
}

export default Actvididades_cards;
