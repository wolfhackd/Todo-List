import React from 'react'
import iconOne from  '../assets/icons/006-to-do.png'
import iconTwo from  '../assets/icons/001-to-do-list.png'
import '../index.css'

// Falta terminar a esquematização da data e hora


const Header = () => {
  return (
    <>
    <div className="header">
        <img src={iconOne} alt="Imagem de uma todo" />
        <h1>Task-List</h1>
        <img src={iconTwo} alt="Imagem de uma todo" />
    </div>
    <div className='bar'>
        <h2>Bem-vindo</h2>
        <div className="date">
            <p className='hours'> 17:50</p>
            <p className="day">FRIDAY</p>
        </div>
    </div>
    </> 
  )
}

export default Header