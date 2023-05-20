import React from 'react'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p className="footer-info">Herbie's Hoodies. All rights reserved</p>
        <div className="socials-con">
           <FaTwitter className='social-icon'/>
           <FaLinkedin className='social-icon'/>
           <FaGithub className='social-icon'/>
        </div>
    </div>
  )
}

export default Footer