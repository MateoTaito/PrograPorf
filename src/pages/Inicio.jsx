import React from 'react'
import InicioBanner from '../components/InicioBanner'
import InicioCarrusel from '../components/InicioCarrusel'
import InicioCarruselAyudantes from '../components/InicioCarruselAyudantes'
import Footer from '../components/LayoutFooter'
import { useEffect, useContext } from 'react'
import FormularioContext from '../context/FormularioContext'

function Inicio() {
  const {setListaReuniones} = useContext(FormularioContext)
  // Local Storage Para el formulario
  useEffect(() => {
    const obtenerLS = () => {
        const listaReunionesLS = JSON.parse(localStorage.getItem('listaReuniones')) ?? [];
        setListaReuniones(listaReunionesLS)
    }
    obtenerLS();
    }, []);

  return (
    <div>
    <InicioBanner/>
    <div className='que_hacemos'>
      <h2>¿Que hacemos?</h2>
      <p>Somos un grupo estudiantil apasionado por la tecnología y el mundo de la informática. Nos dedicamos al mantenimiento y la mejora continua del laboratorio "Fz-104", un espacio vital para el desarrollo de nuestras habilidades y conocimientos en esta área.

Nuestro principal objetivo es fomentar el aprendizaje y la experimentación en informática. Organizamos actividades, talleres y charlas que buscan no solo potenciar el uso de las herramientas tecnológicas, sino también promover la creatividad, la innovación y el pensamiento crítico entre nuestros miembros y la comunidad académica en general.</p>
    </div>
    <InicioCarrusel/>
    <div className='que_hacemos'>
      <h2>¿Quienes Somos?</h2>
      <p>Somos un grupo de estudiantes encargados del laboratorio de informatica Fz-104, nos enfocamos en el crecimiento conjunto. Aquí encontrarás un espacio para compartir ideas, colaborar en proyectos innovadores y aprender de manera práctica a través de nuestras actividades regulares. Además, nos comprometemos con el mantenimiento y la actualización constante del laboratorio, asegurando un ambiente propicio para el desarrollo de proyectos y la investigación en informática.

¡Únete a nosotros y sé parte de esta comunidad apasionada por la tecnología! Explora nuestras actividades, conoce más sobre nuestras iniciativas y únete a nuestros eventos para sumergirte en el fascinante mundo de la informática.</p>
    </div>
    <InicioCarruselAyudantes/>
    <Footer/>
  </div>
  )
}

export default Inicio