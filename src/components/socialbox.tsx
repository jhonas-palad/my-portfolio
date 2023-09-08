import React from 'react'
import fblogo from '../assets/facebooklogo.svg'
import iglogo from '../assets/iglogo.svg'
import linkedinlogo from '../assets/linkedinlogo.svg'
import githubdarklogo from '../assets/github-mark-white.svg'
import githublogo from '../assets/github-mark.svg'
import { useDarkmode } from '../context/darkModeProvider'
const SocialBox = () => {
  const {darkmode} = useDarkmode();
  return (
    <div className='min-h-[50vh] flex  flex-col gap-10'>
      <div>
        <h1 className='text-5xl mb-4'>Let's Connect</h1>
        <p className='px-[4rem] dark:text-secondary-500'>
          Do you have any questions of project in mind? I am here to help and excited to here from you.
        </p>
      </div>
      <div className='flex justify-center md:gap-10 gap-8'>
        {
          [{logo:fblogo,link:"https://www.facebook.com/paladj28"}, {logo:iglogo, link:"https://www.instagram.com/jh_emman", }, {logo: linkedinlogo, link: "https://www.linkedin.com/in/jhonas-palad-234835198/"}, {logo: githublogo, dark: githubdarklogo , link:""}].map(({logo, link ,dark = null})=>(
            <a target='_blank' className='link md:p-3 p-2 dark:bg-slate-800 bg-slate-100 border-2 rounded-2xl dark:border-slate-800 backdrop-blur-3xl shadow-lg dark:shadow-slate-900' href={link}>
              <img className=' md:w-[60px] w-[40px]' src={!dark ? logo : darkmode ? dark : logo}/>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default SocialBox