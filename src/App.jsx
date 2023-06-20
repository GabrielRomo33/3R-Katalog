import { useState } from 'react'
import CardOption from './CardOption'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='tittle'>Romo Bienes Raices y Avaluos</h1>
    </div>
    <div className='techo'>
     <img src="./img/techoimg.jpg" alt="Home" className='techoMenu' />
    </div>
    <div className='menu'>
      <CardOption />
      <CardOption />
      <CardOption />
      <CardOption />
    </div>
    </>
  )
}

export default App
