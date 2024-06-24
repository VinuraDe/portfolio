import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className = "container header__container">
        <h5>Hello</h5>
        <h1>I'm Vinura de Silva</h1>
        <h5 className='text-light'>Full-Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={Me} alt='me' />
        </div>
        <div>
          <a href = "#contact" className='scroll__down'>Scroll Down(Contact Me)</a>
        </div>

      </div>
    </header>
  )
}

export default Header