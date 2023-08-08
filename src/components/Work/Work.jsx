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
    </div>
    <div className='projects-container'>
      {
        data.map(project => <img src={project.img} />)
      }
    </div>
    </div>
  )
}

export default Work