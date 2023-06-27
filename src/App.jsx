// import { useState } from 'react'
import CardOption from './CardOption'
import './App.css'

function App() {

  return (
    <>
      <div className='tittle-container'>
        <img src="./img/casco.png" alt="" className='casco'/>
        <h1 className='tittle'>Romo Bienes Raices y Avaluos</h1>
      </div>
      <div className='techo'>
        <img src="./img/techoimg.jpg" alt="Home" className='techoMenu' />
      </div>
      <div className='menu'>
          <div className='section'>
            <div className='option'><CardOption 
                                      tittle={'Casas'}
                                      src={'./img/House.jpg'}
                                      descripcion={'En esta seccion podra encontrar las opciones '+
                                      'que tenemos en nuestro catalogo de viviendas que tenemos para usted.'}
                                      enlace={'#'}/></div>
            <div className='option'><CardOption 
                                      tittle={'Terrenos'}
                                      src={'./img/Terreno.jpg'}
                                      descripcion={'En esta seccion podra encontrar las opciones '+
                                      'que tenemos en nuestro catalogo de Terrenos que tenemos para usted.'}
                                      enlace={'#'}/></div>
          </div>               
          <div className='section'>
            <div className='option'><CardOption 
                                      tittle={'Agendar Avaluos'}
                                      src={'./img/Avaluo.jpg'}
                                      descripcion={'En esta seccion el Asesor podra agendarle su cita '+
                                      'para ir a evaluar su Propiedad.'}
                                      enlace={'#FullModal'}/></div>  
            <div className='option'><CardOption 
                                      tittle={'Alta de propiedades'}
                                      src={'./img/Registro.jpg'}
                                      descripcion={'En esta seccion el Asesor podra dar de alta propiedades '+
                                      'para que el client pueda visualizarlas en los catalogos'}
                                      enlace={'#FullModal'}/></div>
        </div>
      </div>

      <div id='FullModal' class='modal-fullscreen'>
        Welcome Home
      </div>
    </>
  )
}

export default App
