import './About.css'
import aboutpic from '../../assets/icons/about.png'
import flowerRed from '../../assets/icons/red.png'

function About() {
  return (
    <div id='about-section' className="about-container">
      <img src={aboutpic} alt='about pic'/>
        <div className='about-card'>
          <section>
            <img src={flowerRed} alt='red flower' />
            <h2>About</h2>
          </section>
            <p>
              With 2 years of experience in front-end development, I can confidently develop responsive apps that deliver an unparalleled user experience. I strive for excellence in my work, diligently aiming for top-notch quality that consistently surpasses expectations. Known for being approachable and easy-going, I thrive in collaborative settings and excel at building strong relationships with colleagues.
            </p>
        </div>
    </div>
  )
}

export default About