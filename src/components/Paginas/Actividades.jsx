import React from 'react'
import Inicio_card_prof from '../inicio_card_ayudante'
import Inicio_carusel from '../inicio_card_carusel'
import Actvididades_tabla from '../actividades_tabla'
import Footer from '../footer'

function actividades() {
  return (
    <div>
    <h1 className='text_login centrado abajo'>Actividades</h1>
      <Actvididades_tabla/>
    </div>
  )
}

export default actividades