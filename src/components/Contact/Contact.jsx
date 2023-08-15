import './Contact.css'
import React from 'react'
import email from '../../assets/email.png'


function Contact() {

// email function
// const handleClick = () => window.location.href = 'mailto:tinanguyen.connect@gmail.com';

  return (
    <div className='contact-container'>
      <h2>Contact Me</h2>
      <p>I appreciate you taking the time to review my work. I'm eager to explore remote opportunities on your team. Please feel free to reach out if you have any remote roles or freelance work I can contribute to. I'd love to connect so we can stay in touch!</p>
      <div className='contact-links'>
        {/* <button onClick={handleClick}><img src={email} /></button> */}
        <p>Connect with me</p>
        <p>View Github</p>
        <img src={email} />
      </div>
    </div>
  );
}

export default Contact