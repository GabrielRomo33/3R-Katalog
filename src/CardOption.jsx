import React from 'react'
import './CardOption.css'

export const CardOption = ({tittle,descripcion,src,enlace}) => {
  return (
    <>
      <a href={enlace}>
        <h1 className='subtitle'>{tittle}</h1>
      </a>
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