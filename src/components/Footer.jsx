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
                <li>MSI Reward Program</li>

                <li>Forum</li>
                <li>Social Media</li>
                <li>Videos</li>
                <li>Gaminng Teams</li>
                <li>Blogs</li>
                <li>Customers Stories</li>
            </ul>
        </div>
     

 
        <div className='space-y-5 py-5 md:py-0'>
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>SUPPORT</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li>Downloads</li>

                <li>  Member Center</li>
                <li>Online Customer Service
</li>
                <li>Warranty</li>
       
            </ul>
        </div>

        


        <div className='space-y-5  py-5 md:py-0'>
            
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>NEWS</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li>Press Room</li>

                <li>Awards</li>
                <li>RSS</li>
           
            </ul>
        </div>
        


        <div className='space-y-5  py-5 md:py-0'>
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>MEDIA</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li>Brochure</li>

                <li>Wallpaper</li>
     
                <li>MSI Apps</li>
         
            </ul>
        </div>

        <div className='space-y-5  py-5 md:py-0'>
            <p className='font-[600] text-xl  border-b-[1px] md:border-none border-red-500'>        ABOUT US</p>
                      <ul className='space-y-3 font-light text-lg'>

                <li>MSI Reward Program</li>

                <li>About MSI</li>
                <li>Mission And Vision</li>
                <li>Brand Story</li>
                <li>Investor Information</li>
                <li>Innovation DNA</li>
                <li>CSR</li>
            </ul>
        </div>
    </div>
     <div className="bottom flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center text-sm p-5 text-neutral-500 border-t-2 mt-10">
        <div className="left flex items-center space-x-4">
        <img src={logo} alt=""  className='w-12 '/>
        <p>Copyright © 2022 Micro-Star INT'L CO., LTD. All rights reserved.</p>

        </div>
        <div className="right text-[0.8rem]">
            <ul className='flex space-x-5 '>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li><AiOutlineGlobal className='inline mr-1' size={15}/>Global / English</li>
            </ul>

        </div>

     </div>

    </div>
   
  )
}

export default Footer