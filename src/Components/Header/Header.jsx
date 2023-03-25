import React from 'react'
import LogoDNC from '../../assets/logo-dnc.png'
import "./index.css"

const Header = () => {
  return (
    <header className='header'>
      <img src={LogoDNC} alt='logo-dnc' />
      <h1>Lista de Tarefas</h1>
    </header>
  )
}

export default Header