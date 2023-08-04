import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <a href='#'>Tina Nguyen</a>
        <div className='header-links'>
        <a href='#'>Home</a>
        <a href='#'>Projects</a>
        <a href='#'>Connect</a>
        </div>
    </div>
  )
}

export default Header