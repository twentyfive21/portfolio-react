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
import sql from '../../assets/icons/mysql.png'
import java from '../../assets/icons/java.png'
import intellj from '../../assets/icons/Intellj.png'
import splunk from '../../assets/icons/splunk.jpg'



function Skills() {
  return (
    <div className='skills-container'>
      <h2>Tech Stack</h2>
      <div className='skills'>
      <img src={splunk} alt='splunk logo' />
        <img src={java} alt='javalogo' />
        <img src={sql} alt='mysql logo' />
        <img src={reactImg} alt='react logo'/>
        <img src={js} alt='javascript logo'/>
        <img src={graphQL} alt='grapghQL logo'/>
        <img src={css} alt='css logo'/>
        <img src={html} alt='html logo'/>
        <img src={git} alt='git logo'/>
        <img src={figma} alt='figma logo'/>
        <img src={netlify} alt='netlify logo'/>
        <img src={boot} alt='bootstrap logo' />
        <img src={intellj} alt='intellj logo' />
      </div>
    </div>
  )
}

export default Skills