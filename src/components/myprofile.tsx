import React from 'react'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import myPic from '../assets/my-image.png'
const MyProfile = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='my-profile max-w-lg'>
        <div className='mr-6 w-40 md:w-56'>
        </div>
        <div className='my-name w-full z-40 mb-3'>
            <h1>
            Jhonas<br/>Emmanuel<br/>Palad<span className='text-primary-900'>.</span>
            </h1>
            <div className='line-x'/>
          </div>
        <div className='my-pic'>
            <div className='relative flex justify-center'>
              <img id="my-image" src={myPic}/>
              <div className='box-decor'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile