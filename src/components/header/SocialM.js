import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

function SocialM() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="__blank"><BsLinkedin size={25}/></a>
        <a href='https://github.com' target="__blank"><BsGithub size={25} /></a>    
        <a href='https://www.whatsapp.com' target="__blank"><BsWhatsapp size={25}/></a>    
    
    </div>
  )
}

export default SocialM