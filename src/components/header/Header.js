import React from 'react'
import CTA from './CTA'
import SocialM from './SocialM'
import "./header.css"
import me from '../../assets/ME.png';


const Header = () => {
  return (
      <header>
          <div className='container header__container'>
            <h5 >Hello I'm</h5>
            <h1>Martin Bravo</h1>
            <h4 className='text-light'>MERN STACK Developer</h4>
            <CTA/>
            <a href='#contact' className='scroll__down'>Contact</a>
            <SocialM/>
       
            <div className='me'>
              <img src={me} alt="Martin img"/>
            </div>    



          </div>
      </header>
    )
}

export default Header