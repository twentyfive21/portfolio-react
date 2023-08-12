import './Skills.css'
import reactImg from '../../assets/react.png'
import js from '../../assets/js.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import figma from '../../assets/figma.png'
import boot from '../../assets/bootstrap.png'


function Skills() {
  return (
    <div className='skills-container'>
      <h1>Tech Stack</h1>
    <div className='skills'>
       <img src={reactImg} className='react-img' alt='react logo'/>
       <img src={js} alt='javascript logo'/>
       <img src={css} alt='css logo'/>
       <img src={boot} alt='bootstrap logo'/>
       <img src={html} alt='html logo'/>
       <img src={figma} alt='figma logo'/>
    </div>
    </div>
  )
}

export default Skills