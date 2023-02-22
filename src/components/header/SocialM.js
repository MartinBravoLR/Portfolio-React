import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

function SocialM() {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/martin-bravolr' target="__blank"><BsLinkedin size={25}/></a>
        <a href='https://github.com/MartinBravoLR' target="__blank"><BsGithub size={25} /></a>    
        <a href='https://wa.me/3804823049' target="__blank"><BsWhatsapp size={25}/></a>    
    
    </div>
  )
}

export default SocialM