import React from 'react'
import './Skills.css'
import reactImg from '../../assets/react.png'
import js from '../../assets/js.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import figma from '../../assets/figma.png'


function Skills() {
  return (
    <div className='skills'>
       <img src={reactImg} className='react-img' alt='react logo'/>
       <img src={js} alt='javascript logo'/>
       <img src={css} alt='css logo'/>
       <img src={html} alt='html logo'/>
       <img src={figma} alt='figma logo'/>
    </div>
  )
}

export default Skills