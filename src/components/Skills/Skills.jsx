import './Skills.css'
import reactImg from '../../assets/reactjs2.png'
import js from '../../assets/js2.png'
import css from '../../assets/css2.png'
import html from '../../assets/html2.png'
import figma from '../../assets/figma2.png'
import boot from '../../assets/bootstrap2.png'
import netlify from '../../assets/netlify2.png'
import git from '../../assets/git2.png'


function Skills() {
  return (
    <div className='skills-container'>
      <h2>Tech Stack</h2>
    <div className='skills'>
       <img src={reactImg} className='react-img' alt='react logo'/>
       <img src={js} alt='javascript logo'/>
       <img src={css} alt='css logo'/>
       <img src={html} alt='html logo'/>
       <img src={figma} alt='figma logo'/>
       <img src={netlify} alt='netlify logo'/>
       <img src={git} alt='git logo'/>
       <img src={boot} alt='bootstrap logo'/>
    </div>
    </div>
  )
}

export default Skills