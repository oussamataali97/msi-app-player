import React from 'react'
import logo from '../../public/logo.png'
import {AiOutlineUser,AiOutlineSearch} from 'react-icons/ai'
import {GrMap} from 'react-icons/gr'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between md:p-8 p-4   ' >
        <img src={logo} alt="" />
        <ul className='links hidden  md:flex space-x-7 flex-1 ml-10 font-[700] uppercase text-gray-600'>
            <a href="#"><li>Products</li></a>
            <a href="#"><li>Odm Solutions</li></a>
            <a href="#"><li>What's New</li></a>
            <a href="#"><li>Support</li></a>
        </ul>
        <ul className='links flex space-x-7 font-[300] '>
            <a href="#"><li><AiOutlineUser size={20}/></li></a>
            <a href="#"><li><GrMap size={20} /></li></a>
            <a href="#"><li><AiOutlineSearch size={20}/></li></a>
        </ul>
    </div>
  )
}

export default Navbar