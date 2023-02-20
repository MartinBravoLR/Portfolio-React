import React from 'react'
import "./about.css"
import ME from '../../assets/ME.png';
import {IoMdGitNetwork} from  "react-icons/io" 


const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
                <IoMdGitNetwork color="white"size={30}/>
              <h5>Projects</h5>
              <small>+10 Projects</small>
            </article>
          </div>
          <p>I am a MERN STACK web developer who is an enthusiast of technology and robotics in which I seek to improve day by day to provide better solutions. </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

       
      </div>

    </section>
  )
}

export default About