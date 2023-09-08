import React from 'react'
import Navbar from '../components/navbar'
import myPic from '../assets/my-image.png'
import '../assets/css/home.css'
import MyProfile from '../components/myprofile'
import Bio from '../components/bio';
import TechIcons from '../components/techicons'
import Projects from '../components/projects'
import SocialBox from '../components/socialbox'
import SectionWrapper from '../components/sectionwrapper'

const HomePage:React.FC = () => {
  return (
    <>
    <div className='w-full'>
      <div className='section first'>
        <SectionWrapper>
          <MyProfile/>
        </SectionWrapper>
      </div>
      <div className='section third items-center'>
        <SectionWrapper>
          <TechIcons/>
        </SectionWrapper>
      </div>
      <div className='section second'>
        <SectionWrapper>
          <Bio/>
        </SectionWrapper>
      </div>
      <div className='section fourth'>
        <SectionWrapper>
          <Projects/>
        </SectionWrapper>
      </div>
      <div className='section fifth'>
        <SectionWrapper>  
          <SocialBox/>
        </SectionWrapper>
      </div>
      <div className='section fifth'>
        <SectionWrapper>  
          <p>Copyright © 2023. All Rights Reserved</p>
        </SectionWrapper>
      </div>
    </div>
    </>
  )
}

export default HomePage