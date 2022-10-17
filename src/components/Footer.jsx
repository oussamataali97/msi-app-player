import React from 'react'
import logo from '../../public/logo.png'
import {AiOutlineGlobal} from 'react-icons/ai'

function Footer() {
  return (
    <div className="footer">
         <div className='grid md:grid-cols-5 justify-center grid-cols-1 md:text-center text-neutral-600 bg-white p-5 "'>
        <div className='space-y-5'>
            <p className='font-[600] text-xl border-b-[1px] md:border-none border-red-500'>COMMUNITY</p>
            <ul className='space-y-3 font-light text-lg'>
                <li><a href="#" className='hover:text-red-600'> MSI Reward Program</a></li>

                <li><a href="#" className='hover:text-red-600'> Forum</a></li>
                <li><a href="#" className='hover:text-red-600'> Social Media</a></li>
                <li><a href="#" className='hover:text-red-600'> Videos</a></li>
                <li><a href="#" className='hover:text-red-600'> Gaminng Teams</a></li>
                <li><a href="#" className='hover:text-red-600'> Blogs</a></li>
                <li><a href="#" className='hover:text-red-600'> Customers Stories</a></li>
            </ul>
        </div>
     

 
        <div className='space-y-5 py-5 md:py-0'>
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>SUPPORT</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li><a href="#" className='hover:text-red-600'> Downloads</a></li>

                <li><a href="#" className='hover:text-red-600'>   Member Center</a></li>
                <li><a href="#" className='hover:text-red-600'> Online Customer Service
</a></li>
                <li><a href="#" className='hover:text-red-600'> Warranty</a></li>
       
            </ul>
        </div>

        


        <div className='space-y-5  py-5 md:py-0'>
            
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>NEWS</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li><a href="#" className='hover:text-red-600'> Press Room</a></li>

                <li><a href="#" className='hover:text-red-600'> Awards</a></li>
                <li><a href="#" className='hover:text-red-600'> RSS</a></li>
           
            </ul>
        </div>
        


        <div className='space-y-5  py-5 md:py-0'>
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>MEDIA</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li><a href="#" className='hover:text-red-600'> Brochure</a></li>

                <li><a href="#" className='hover:text-red-600'> Wallpaper</a></li>
     
                <li><a href="#" className='hover:text-red-600'> MSI Apps</a></li>
         
            </ul>
        </div>

        <div className='space-y-5  py-5 md:py-0'>
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>        ABOUT US</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li><a href="#" className='hover:text-red-600'> MSI Reward Program</a></li>

                <li><a href="#" className='hover:text-red-600'> About MSI</a></li>
                <li><a href="#" className='hover:text-red-600'> Mission And Vision</a></li>
                <li><a href="#" className='hover:text-red-600'> Brand Story</a></li>
                <li><a href="#" className='hover:text-red-600'> Investor Information</a></li>
                <li><a href="#" className='hover:text-red-600'> Innovation DNA</a></li>
                <li><a href="#" className='hover:text-red-600'> CSR</a></li>
            </ul>
        </div>
    </div>
     <div className="bottom flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center  p-5 text-neutral-500 border-t-2 mt-10">
        <div className="left flex items-center space-x-4">
        <img src={logo} alt=""  className='w-12 '/>
        <p>Copyright © 2022 Micro-Star INT'L CO., LTD. All rights reserved.</p>

        </div>
        <div className="right text-[0.6rem]">
            <ul className='flex space-x-5 '>
                <li><a href="#" className='hover:text-red-600'> Cookie Policy</a></li>
                <li><a href="#" className='hover:text-red-600'> Privacy Policy</a></li>
                <li><a href="#" className='hover:text-red-600'> Terms of Use</a></li>
                <li><a href="#" className='hover:text-red-600'> Contact Us</a></li>
                <li><a href="#" className='hover:text-red-600'> <AiOutlineGlobal className='inline mr-1' size={15}/>Global / English</a></li>
            </ul>

        </div>

     </div>

    </div>
   
  )
}

export default Footer