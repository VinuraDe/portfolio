import React from 'react'
import cv from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Donwload CV</a>
        <a href="#contact" className='btn'>Contact Me</a>

    </div>
  )
}

export default CTA