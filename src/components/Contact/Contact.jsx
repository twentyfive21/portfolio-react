import './Contact.css'
import React from 'react'

function Contact() {

// email function
const handleClick = () => window.location.href = 'mailto:tinanguyen.connect@gmail.com';

  return (
    <div className='contact-container'>
      <h2>Contact Me</h2>
      <p>I appreciate you taking the time to review my work. I'm eager to explore remote opportunities on your team. Please feel free to reach out if you have any remote roles or freelance work I can contribute to. I'd love to connect so we can stay in touch!</p>
    <button onClick={handleClick}>
      Send Email
    </button>
    </div>
  );
}

export default Contact