import React from 'react'
import cv from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download >Donwload CV</a>
        <a href="#contact">Contact Me</a>

    </div>
  )
}

export default CTA