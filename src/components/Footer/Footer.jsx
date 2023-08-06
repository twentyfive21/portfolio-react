import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsFlower1 } from "react-icons/bs";

// https://bmc.link/twentyfive21

function Footer() {
  return (
    <footer>
      <FaGithub />
      <BsLinkedin />
      <BsFlower1 />
    </footer>
  )
}

export default Footer