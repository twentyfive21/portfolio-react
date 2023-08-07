import React from 'react'
import './Work.css'
import data from '../../utilities/data'

function Work() {
  return (
   
    <div className='work-container'>
      <h1>My Work</h1>
     <div className='filter-container'>
      <p>All</p>
      <p>React</p>
      <p>Javascript</p>
      <p>HTML & CSS</p>
      {/* <img src={data[0].img} alt="" /> */}
    </div>
    </div>
  )
}

export default Work