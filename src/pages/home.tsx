import React from 'react'

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
      {/* <div id="about-me" className='h-2'></div> */}
      <div id="about-me" className='section first'>
        <SectionWrapper>
          <MyProfile/>
        </SectionWrapper>
      </div>
      <div id="techstack" className='h-2'/>
      <div className='section third items-center'>
        <SectionWrapper>
          <TechIcons/>
        </SectionWrapper>
      </div>
      <div id="bio" className='h-2'/>
      <div className='section second'>
        <SectionWrapper>
          <Bio/>
        </SectionWrapper>
      </div>
      <div id="projects" className='h-2'/>
      <div className='section fourth'>
        <SectionWrapper>
          <Projects/>
        </SectionWrapper>
      </div>
      <div id="social" className='h-2'/>
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