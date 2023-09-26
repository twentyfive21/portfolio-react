import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsFlower1 } from "react-icons/bs";

// https://bmc.link/twentyfive21

function Footer() {
  return (
    <footer className='footer-container'>
      <div>
      <a href='https://github.com/twentyfive21'><FaGithub /></a>
      <a href='https://www.linkedin.com/in/tina-ngu'><BsLinkedin /></a>
      <a href='https://bmc.link/twentyfive21'><BsFlower1 /></a>
      </div>
      <p>&#169; 2023 Tina Nguyen </p>
    </footer>
  )
}

export default Footer