import './Contact.css'
import React from 'react'
import email from '../../assets/icons/email.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'


function Contact() {

// email function
const handleClick = () => window.location.href = 'mailto:tinanguyen.connect@gmail.com';

  return (
    <div id='contact-section' className='contact-container'>
      <h2>Contact Me</h2>
      <p>I appreciate you taking the time to review my work. Please feel free to reach out if you have any remote roles or freelance work I can contribute to.</p>
        <div className='contact-links'>
          <button>
          <a href='https://www.linkedin.com/in/tina-ngu'><img src={linkedin} /></a>
          </button>
          <button onClick={handleClick}><img src={email} alt='email icon'/></button>
          <button>
          <a href='https://github.com/twentyfive21'><img src={github} alt='github' /></a>
          </button>
        </div>
    </div>
  );
}

export default Contact