import React from 'react'
import pythonicon from '../assets/img/tech-icons/python-icon.svg'
import jsicon from '../assets/img/tech-icons/logo-javascript.svg'
import htmlicon from '../assets/img/tech-icons/html-1.svg'
import cssicon from '../assets/img/tech-icons/css-3.svg'
import bootstrapicon from '../assets/img/tech-icons/bootstrap-5-1.svg'
import djangoicon from '../assets/img/tech-icons/cdnlogo.com_django.svg'
import redisicon from '../assets/img/tech-icons/redis.svg'
import reacticon from '../assets/img/tech-icons/react-2.svg'
import reactnativeicon from '../assets/img/tech-icons/react-native-1.svg'
import mysqlicon from '../assets/img/tech-icons/mysql-logo.svg'
import expoicon from '../assets/img/tech-icons/expo-1.svg'
import mongodbicon from '../assets/img/tech-icons/cdnlogo.com_mongodb-icon.svg'
import nginxicon from '../assets/img/tech-icons/nginx.svg'
import typescripticon from '../assets/img/tech-icons/typescript.svg'
import tailwindcssicon from '../assets/img/tech-icons/tailwindcss.svg'
const TechIcons = () => {
  const ICONS = [
    pythonicon,
    jsicon,
    typescripticon,
    htmlicon,
    cssicon,
    reacticon,
    djangoicon,
    tailwindcssicon,
    bootstrapicon,
    redisicon,
    mysqlicon,
    mongodbicon,
    reactnativeicon,
    expoicon,
    nginxicon
  ]
  return (
    <div className='flex flex-col items-center p-5'>
      <h1 className='text-5xl mb-4'>Technology Stack</h1>
      <p className='px-[4rem] dark:text-secondary-500'>
        Equipped with a versatile technology arsenal, I'm ready to tackle any project, adapting to its unique needs and challenges.
      </p>
      <div className='tech-icons'>
        {
          ICONS.map((icon, index) =>  (
            <img key={index} className='w-[54px] md:w-[60px]' src={icon}/>
          ))
        }
      </div>
    </div>
  )
}

export default TechIcons