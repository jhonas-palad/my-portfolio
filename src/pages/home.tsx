import React from 'react'
import Navbar from '../components/navbar'
import myPic from '../assets/my-image.png'
import '../assets/css/home.css'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin}from 'react-icons/fa'
import NameHeading from '../components/nameheading'
const HomePage:React.FC = () => {
  return (
    <>
    <div className='w-full'>
      <div className='section first'>
        <div className='border-0 flex justify-center items-center'>
          <div className='my-profile max-w-lg'>
            <div className='my-links mr-6'>
              <FaInstagram/>
              <FaFacebook/>
              <FaLinkedin/>
              <FaGithub/>
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
                {/* <img className="object-contain" src={myPic}/> */}
    
          </div>
        </div>
        <div className='my-description'>
          <p className='text-left'>
            - Profile
          </p>
          <h1>
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
      </div>
    </div>
    </>
  )
}

export default HomePage