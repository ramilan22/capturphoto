'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const HandleNav = () => {
    setNav(!nav)
  }

  const [color,setColor] = useState('transparent')
  const [textColor,setTextColor] = useState('white')

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90){
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, []);

  return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
       <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>

        <Link href="/">

        <h1 style={{color:`${textColor}`}} className='font-bold text-4xl'>Captur</h1>
        </Link>
        <ul style={{color:`${textColor}`}} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='block sm:hidden z-10' onClick={()=>{HandleNav()}}>
         { nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}}/>  : <AiOutlineMenu size={20} style={{color:`${textColor}`}}/>}
        </div>
        <div className={nav ? 'sm:hidden absolute top-20 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center':'sm:hidden absolute top-20 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center'}>
        <ul>
          <li
          onClick={HandleNav}
          className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/'>Home</Link>
          </li>
          <li
          onClick={HandleNav}
          className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li
          onClick={HandleNav}
          className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/work'>Work</Link>
          </li>
          <li
          onClick={HandleNav}
          className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        </div>
       </div>
    </div>
  )
}

export default Navbar