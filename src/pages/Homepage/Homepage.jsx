import React from 'react'
import './Homepage.css'
// import regular from "../../assets/regular.png"
import yellow from "../../assets/yellow.png"
import red from "../../assets/red.png"
import green from "../../assets/green.png"



function Homepage() {
  return (
    <div className='intro-container'>
      <div className='top-section'>
      <img src={yellow} />
      <h1>Hi, I'm Tina <br/>A Frontend Developer.</h1>
      <img src={green} />
      </div>
    </div>
  )
}

export default Homepage