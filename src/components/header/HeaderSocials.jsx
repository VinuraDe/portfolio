import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillBehanceCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/VinuraDe' target='_blank'><AiFillGithub style={{ fontSize: '40px' }}/></a>
        <a href='https://www.linkedin.com/in/vinura-de-silva/' target='_blank'><AiFillLinkedin style={{ fontSize: '40px' }}/></a>
        <a href='https://www.behance.net/vinuradesilva' target='_blank'><AiFillBehanceCircle style={{ fontSize: '40px' }}/></a>

    </div>
  )
}

export default HeaderSocials