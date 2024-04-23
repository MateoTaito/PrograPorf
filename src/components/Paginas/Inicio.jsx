import React from 'react'
import Banner_inicio from '../banner_inicio'
import Desc_Lab from '../desc_lab'
import Carrusel_inicio from '../carrusel_inicio'
import Carrusel_ayudantes from '../inicio_card_carusel'
import Footer  from '../footer'


function Inicio() {
  return (
    <div>
      <Banner_inicio/>
      <div className='que_hacemos'>
        <h2>¿Que hacemos?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Sed iaculis ante quis tortor dapibus, sed dapibus arcu suscipit. Nunc sit amet augue ipsum. Cras a tellus aliquet, 
          vestibulum tellus nec, ornare leo. Pellentesque tortor tortor, semper et leo nec, cursus vulputate tortor. Praesent in dui nibh. 
          Curabitur maximus turpis et ligula tristique, ut accumsan justo porta. In accumsan leo id tempus condimentum. 
          Nulla lacinia nisl sit amet diam maximus, vel feugiat arcu sagittis. Nullam vel congue metus.</p>
      </div>
      <Carrusel_inicio/>
      <div className='que_hacemos'>
        <h2>¿Quienes Somos?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices hendrerit placerat. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Sed iaculis ante quis tortor dapibus, sed dapibus arcu suscipit. Nunc sit amet augue ipsum. Cras a tellus aliquet, 
          vestibulum tellus nec, ornare leo. Pellentesque tortor tortor, semper et leo nec, cursus vulputate tortor. Praesent in dui nibh. 
          Curabitur maximus turpis et ligula tristique, ut accumsan justo porta. In accumsan leo id tempus condimentum. 
          Nulla lacinia nisl sit amet diam maximus, vel feugiat arcu sagittis. Nullam vel congue metus.</p>
      </div>
      <Carrusel_ayudantes/>
      <Footer/>
    </div>
    
  )
}

export default Inicio