import React from 'react'
import './Homepage.css'
// import regular from "../../assets/regular.png"
import yellow from "../../assets/yellow.png"
import green from "../../assets/green.png"



function Homepage() {
  return (
    <div className='intro-container'>
      <div className='top-section'>
      <img src={yellow} className='flowers' alt='flower'/>
      <h1>Hi, I'm Tina <br/>A Frontend Developer.</h1>
      <img src={green} className='flowers' alt='flower'/>
      </div>
      <h3>Passionately creating captivating websites that foster meaningful connections.</h3>
    </div>
  )
}

export default Homepage