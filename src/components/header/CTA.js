import React from 'react'
import "./header.css"

import CV from '../../assets/cv.pdf';
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Dowload CV</a>
        <a href='#contact'className='btn btn-primary'>Let's Talk</a>

    </div>
  )
} 
export default CTA 