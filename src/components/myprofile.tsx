import React from 'react'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import myPic from '../assets/my-image.png';
import MyDescription from './mydescription';
const MyProfile = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='my-profile'>
        <div className='my-pic'>
            <img id="my-image" src={myPic}/>
            <div className='my-name'>
              <h1>
              Jhonas<br/>Emmanuel<br/>Palad<span className='text-primary-900'>.</span>
              </h1>
              <div className='line-x'/>
            </div>
        </div>

        <MyDescription/>
      </div>
    </div>
  )
}

export default MyProfile