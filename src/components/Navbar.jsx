import React from 'react'
import logo from '../../public/logo.png'
import {AiOutlineUser,AiOutlineSearch} from 'react-icons/ai'
import {GrMap} from 'react-icons/gr'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {

  const [show,setShow]=useState(false)
  return (
<>
    <div className="links  z-50">
    <ul className={show ? 'flex text-xl font-[700] p-5 bg-white absolute top-14 md:top-20  overflow-y-hidden w-full flex-col items-start space-y-5 h-screen ease-in-out duration-1000 border-t-2' : 'w-full h-screen bg-white  absolute -top-[90rem] overflow-y-hidden ease-out duration-1000 ' }>
        <a href="#"><li>Products</li></a>
        <a href="#"><li>Odm Solutions</li></a>
        <a href="#"><li>What's New</li></a>
        <a href="#"><li>Support</li></a>
    </ul>
    </div>
    <div className='flex items-center justify-between md:p-8 p-4   relative' >
        <button href="#" className='block lg:hidden ease-out duration-300 z-100' onClick={()=>setShow(!show)}> {!show ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25}/>}  </button>
        <img src={logo} alt="" className= ' w-18 md:w-20' />
        <ul className='links hidden  lg:flex space-x-7 flex-1 ml-10 font-[700] uppercase text-gray-600'>
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
    </>
  )
}

export default Navbar