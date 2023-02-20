import React from 'react'
import "./experience.css"
import {GoVerified} from 'react-icons/go'
import {BiServer} from 'react-icons/bi'
import {MdWeb} from 'react-icons/md'


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have?</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3><MdWeb size={30}/> Frontend Development</h3>
              <div className='experience__content'>
                <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                  </article>  
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>CSS</h4>
                      <small className='text-light'>Experienced</small>
                  </article>   
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>Javascript</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>    
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>React</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>   
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>React Native</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>            
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>BOostrap</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>   
                   <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>MUI</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>   
                  
              </div>
        </div>



        <div className='experience__backend'>
            <h3><BiServer size={30}/>  Backend Development</h3>
              <div className='experience__content'>
                <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>Node Js</h4>
                      <small className='text-light'>Experienced</small>
                  </article>  
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>Express</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>   
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>Mongo DB</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>    
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>C++</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>   
                  <article className="experience__details">
                      <GoVerified size={30}/>
                      <h4>Python</h4>
                      <small className='text-light'>Basic</small>
                  </article> 
                  
              </div>
         </div>

      </div>
    </section>
  )
}

export default Experience