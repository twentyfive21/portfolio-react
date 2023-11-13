import './Skills.css'
import reactImg from '../../assets/icons/reactjs2.png'
import js from '../../assets/icons/js2.png'
import css from '../../assets/icons/css2.png'
import html from '../../assets/icons/html2.png'
import figma from '../../assets/icons/figma2.png'
import boot from '../../assets/icons/bootstrap2.png'
import netlify from '../../assets/icons/netlify2.png'
import git from '../../assets/icons/git2.png'
import graphQL from '../../assets/icons/graphQL.png'


function Skills() {
  return (
    <div className='skills-container'>
      <h2>Tech Stack</h2>
    <div className='skills'>
       <img src={reactImg}  alt='react logo'/>
       <img src={js} alt='javascript logo'/>
       <img src={graphQL} alt='grapghQL logo'/>
       <img src={css} alt='css logo'/>
       <img src={html} alt='html logo'/>
       <img src={git} alt='git logo'/>
       <img src={figma} alt='figma logo'/>
       <img src={netlify} alt='netlify logo'/>
       <img src={boot} alt='bootstrap logo' />
    </div>
    </div>
  )
}

export default Skills