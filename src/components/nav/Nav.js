import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai" 
import {AiOutlineUser} from "react-icons/ai" 
import {AiOutlineMessage} from "react-icons/ai" 

import {MdDesignServices} from "react-icons/md" 
import {BiBookAlt} from "react-icons/bi" 


const Nav = () => {
  const [activeNav, setActiveNav]=React.useState("#")
  return (
    <nav>
        <a href='#' className={activeNav==="#"?"active":""}><AiOutlineHome  size={25}/></a>
        <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav==="#about"?"active":""}><AiOutlineUser size={25}/></a>
        <a href='#experience'onClick={()=>setActiveNav("#experience")} className={activeNav==="#experience"?"active":""}><BiBookAlt size={25}/></a>
        <a href='#portafolio'onClick={()=>setActiveNav("#portafolio")} className={activeNav==="#portafolio"?"active":""}><MdDesignServices size={25}/></a>

        <a href='#contact'onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"?"active":""}><AiOutlineMessage size={25}/></a>

    </nav>
  )
}

export default Nav