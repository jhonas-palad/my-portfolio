import React, { useCallback } from 'react'
import Logo from './logo'

import {PiMoonStarsFill, PiSunFill } from 'react-icons/pi'
import {FaGithub, FaBars} from 'react-icons/fa'

import { useDarkmode } from '../context/darkModeProvider'
import { Transition, Menu } from '@headlessui/react'

const Navbar = () => {
  const {darkmode,toggleDarkMode} = useDarkmode();
  const toggleDark = useCallback(()=> toggleDarkMode(prev => !prev), [toggleDarkMode])
  return (
    <header className='z-50'>
      <Menu as='div' className='relative w-full'>
        <div className='flex w-full items-center justify-between'>
          <Logo/>
          <div className='md:flex gap-3 hidden'>
            <nav className='relative navlinks gap-3'>
              <a>About me</a>
              <a>Projects</a>
            </nav>
            <div className='h-7 border-[0.2px] border-gray-300 dark:border-gray-700'/>
            <div className='flex gap-2'>
              <button onClick={toggleDark}>
                {
                  darkmode ? (
                    <PiMoonStarsFill className="text-lg"/>
                  ) : (
                    <PiSunFill className="text-lg"/>
                  )
                }
              </button>
              <a href='https://github.com/jhonas-palad/my-portfolio' target='_blank' className='p-[0.3rem] dark:text-white rounded'>
                {
                    <FaGithub className="text-lg"/>
                }
              </a>
            </div>
          </div>
          <Menu.Button className='md:hidden'>
            <FaBars className="text-lg text-secondary-700"/>
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className='flex md:hidden gap-3 flex-col justify-center'>

            <Menu.Item>
              {
                ({active}) => (
                  <a className={`${active? 'bg-secondary-700 text-white' : ''} menu-item`}>About me</a>
                )
              }
            </Menu.Item>
            <Menu.Item>
              {
                ({active}) => (
                  <a className={`${active? 'bg-secondary-700 text-white' : ''} menu-item`}>Projects</a>
                )
              }
            </Menu.Item>
            <Menu.Item>
              {
                ({active}) => (
                  <button 
                    className={`${active? 'bg-secondary-700 text-white' : ''} menu-item`} 
                    onClick={toggleDark}>
                    {
                      darkmode ? (
                        <>
                          Dark mode
                          <PiMoonStarsFill className="text-lg"/>
                        </>
                      ) : (
                        <>
                          Light mode
                          <PiSunFill className="text-lg"/>
                        </>
                      )
                    }
                  </button>
                )
              }
            </Menu.Item>
            <Menu.Item>
              {
                ({active}) => (
                  <a className={`${active? 'bg-secondary-700 text-white' : ''} menu-item`}>
                    Github
                    <FaGithub className="text-lg"/>
                  </a>
                )
              }
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  )
}

export default Navbar