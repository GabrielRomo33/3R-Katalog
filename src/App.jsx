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
      <div className='option'><CardOption /></div>
      <div className='option'><CardOption /></div>
      <div className='option'><CardOption /></div>  
      <div className='option'><CardOption /></div>
    </div>
    </>
  )
}

export default App
