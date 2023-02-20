import React from 'react'
import "./portafolio.css"
import imagen from '../../assets/imagen.png'

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Recent works</h5>
      <h2>Portafolio</h2>

      <div className='container portafolio__container'>
        <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src={imagen} alt=""/>
             </div>
            <h3>This is a portafolio item title</h3>
            
           <div className='portafolio__item-cta'>
             <a href='http://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>   
            </div>
        </article>

        <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src={imagen} alt=""/>
             </div>
            <h3>This is a portafolio item title</h3>
            
           <div className='portafolio__item-cta'>
             <a href='http://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>   
            </div>
        </article>

        <article className='portafolio__item'>
            <div className='portafolio__item-image'>
              <img src={imagen} alt=""/>
             </div>
            <h3>This is a portafolio item title</h3>
            
           <div className='portafolio__item-cta'>
             <a href='http://github.com' className='btn'>GitHub</a>
            <a href='https://github.com' className='btn btn-primary'>Live Demo</a>   
            </div>
        </article>

        
       
       
      </div>
    </section>
  )
}

export default Portafolio