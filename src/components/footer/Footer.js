import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='name'>
        <a href="#">Martin Bravo <i class="em em-computer" size={25}aria-role="presentation" aria-label="PERSONAL COMPUTER"></i></a>
        </div>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About Me</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portafolio'>Portafolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__Socials'>
        <a href='https://linkedin.com'><BsLinkedin size={25}/></a>
        <a href='https://github.com' ><BsGithub size={25} /></a>    
        <a href='https://www.whatsapp.com'><BsWhatsapp size={25}/></a>    

        </div>
        <div className='footer_Copy'>
          <small>&copy;MartinBravoLR .All rights reserved</small>
        </div>

    </footer>
  )
}

export default Footer