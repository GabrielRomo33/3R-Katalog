import { useState } from 'react'
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
                                  descripcion={'No Disponible por el momento'}/></div>
        <div className='option'><CardOption 
                                  tittle={'Terrenos'}
                                  src={'./img/Terreno.jpg'}
                                  descripcion={'No Disponible por el momento'}/></div>
      </div>
                                
        <div className='section'>
        <div className='option'><CardOption 
                                  tittle={'Agendar Avaluos'}
                                  src={'./img/Avaluo.jpg'}
                                  descripcion={'No Disponible por el momento'}/></div>  
        <div className='option'><CardOption 
                                  tittle={'Alta de propiedades'}
                                  src={'./img/Registro.jpg'}
                                  descripcion={'No Disponible por el momento'}/></div>
      </div>
    </div>
    </>
  )
}

export default App
