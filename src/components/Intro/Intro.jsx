import './Intro.css'
import yellow from "../../assets/icons/yellow.png"
import green from "../../assets/icons/green.png"
import tina from "../../assets/icons/tina.png"

function Intro() {
  return (
    <div id='home-section' className='intro-container'>
      <div className='top-section'>
        <img src={yellow} className='flowers' alt='flower'/>
        <h1>Hi, I'm Tina <br/>A Frontend Developer.</h1>
        <img src={green} className='flowers' alt='flower'/>
      </div>
      <h3>Passionately creating captivating websites that foster meaningful connections.</h3>
      <img src={tina} className='intro-pic' alt='profile image'/>
    </div>
  )
}

export default Intro