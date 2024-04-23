import React from "react";
import { useState, useEffect } from "react";
import Footer from "../footer";

function contact() {
  return (
    <>
      <div className="margen_form">
        <h1 className="text_login centrado">Contacto</h1>
        <form className="form">
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">
              ¿Que eres?
            </label>
            <select id="disabledSelect" class="form-select">
              <option>-</option>
              <option>Profesor UAI</option>
              <option>Alumno UAI</option>
              <option>Profesor UAI</option>
              <option>Alumno externo</option>
              <option>Profesor externo</option>
              <option>Otro</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Nombres y Apellidos</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Nunca compartiremos su correo electrónico con nadie más.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              ¿Por qué nos contactas?
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Verificado
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default contact;
