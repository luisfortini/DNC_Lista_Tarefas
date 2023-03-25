import React from 'react'
import "./index.css"

const Column = (props) => {

  const {title} = props
  return (
    <div className='column'>
      <h3>{title}</h3>
      <p>Clique para adicionar um cartão</p>
      <div className='addCard'>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Adicionar Cartão</button>
        <button>Cancelar</button>
      </div>
      

    </div>
  )
}

export default Column