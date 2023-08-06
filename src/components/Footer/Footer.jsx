import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsFlower1 } from "react-icons/bs";

// https://bmc.link/twentyfive21

function Footer() {
  return (
    <footer>
      <a href='https://github.com/twentyfive21'><FaGithub /></a>
      <a href='https://www.linkedin.com/in/tina-nguyen-393b7b237/'><BsLinkedin /></a>
      <a href='https://bmc.link/twentyfive21'><BsFlower1 /></a>
    </footer>
  )
}

export default Footer