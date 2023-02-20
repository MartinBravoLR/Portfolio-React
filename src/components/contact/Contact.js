import React from 'react'
import "./contact.css"
import {CiMail} from  "react-icons/ci" 
import {SiWhatsapp} from  "react-icons/si" 

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
        <div className='container contact__container'>
            <div className='contact__options'>
              <article className='contact__option'>
                <CiMail size={25}/>
              <h4>Email</h4> 
              <h5>martinbravo23205@gmail.com</h5>
              <a href='mailto:martinbravo23205@gmail.com'>Send a message</a>
              </article>
              <article className='contact__option'>
                <SiWhatsapp size={25}/>
              <h4>Whatsapp</h4> 
              <h5>+54 9 3804 82-3049</h5>
              <a href='https://wa.me/3804823049?text=Hola,Me gustaria contratar tus serviios Dev'>Send a message</a>
              </article>
            
            </div>  
        
        <form action=''>
          <input type="text" name="name" placeholder="Your name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
        
        </div>
    </section>
  )
}

export default Contact