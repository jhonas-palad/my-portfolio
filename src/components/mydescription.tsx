import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
const MyDescription = () => {
  return (
    <div className='my-description'>
      <p className='text-left'>
        - About me
      </p>
      <h1 className=''>
        Programmer and Developer, based in Philippines.
      </h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
      <div className='my-links mr-6'>
          <FaInstagram/>
          <FaFacebook/>
          <FaLinkedin/>
          <FaGithub/>
        </div>
      </div>
  )
}

export default MyDescription