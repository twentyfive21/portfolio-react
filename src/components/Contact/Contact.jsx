import './Contact.css'
import React from 'react'
import email from '../../assets/email.png'
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'


function Contact() {

// email function
const handleClick = () => window.location.href = 'mailto:tinanguyen.connect@gmail.com';

  return (
    <div id='contact-section' className='contact-container'>
      <h2>Contact Me</h2>
      <p>I appreciate you taking the time to review my work. I'm eager to explore remote opportunities on your team. Please feel free to reach out if you have any remote roles or freelance work I can contribute to. I'd love to connect so we can stay in touch!</p>
      <div className='contact-links'>
      <a href='https://www.linkedin.com/in/tina-nguyen-393b7b237/'><img src={linkedin} /></a>
      <button onClick={handleClick}><img src={email} alt='email icon'/></button>
      <a href='https://github.com/twentyfive21'><img src={github} alt='github' /></a>
      </div>
    </div>
  );
}

export default Contact