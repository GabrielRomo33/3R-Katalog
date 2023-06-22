import React from 'react'
import './CardOption.css'

export const CardOption = ({tittle,descripcion,src}) => {
  return (
    <>
    <h1 className='subtitle'>{tittle}</h1>
    <div className="option-Container">
      <img src={src} alt="" />
      <p>
        {descripcion}
      </p>
    </div>
    </>
  )
}

export default CardOption