import React from 'react'
import bann from '../../public/Multi-Instance-model.png'

import img from '../../public/Hotkey-Lighting-model.gif'


function Fps() {
  return (

    <>
    <div className="sec bg-black h-full md:pt-32 md:px-16 pt-5 ">
         <div className="text text-center text-white space-y-7">
       <p className='font-[700] text-3xl'>ENJOY ULTRA HIGH FPS IN MOBILE GAMES</p>
        <p  className='font-[500] text-xl'>Feel the smooth visuals by enabling high frame rates. Experience up to 240 FPS with better reaction time and low latency, leading to visual clarity in any movement.
    
</p>
    <p  className='font-[300] text-lg text-neutral-300'>* The actual frame rate may vary by model configuration and game setting.

</p>
       </div>
<div className="bg-contain md:bg-center bg-no-repeat overflow-x-hidden bg-[url('../../public/240FPS-xs.jpg')] h-72 md:h-screen w-full text-center   text-white">
      
  </div>
    </div>

    <div className="text-white bg-[url('../../public/Multi-Instance-bg.jpg')] md:h-screen bg-cover items-center  md:grid grid-cols-2 pt-5 bg-right">
    <div className="right max-w-lg space-y-5 md:ml-16 px-6 md:px-0">
           <p className='text-4xl font-[600]'>MULTI-INSTANCE</p>
           <p className='text-2xl font-[500] '> Play Multiple Games at the Same Time</p>
           <p className='text-xl font-[500] '>Run multiple games simultaneously with no confusion and compromise. It provides performance tuning through Multi-Instance Manager to better fit diverse circumstances in each instance.</p>
            <p className='text-neutral-400'>* The number of instances supported will vary by model.</p>
         </div>
         <div className="left ">
           <img src={bann} alt="" className=''/>
         </div>

    </div>


    <div className="text-white bg-[url('../../public/backgroundd.jpg')] md:h-screen bg-cover items-center  pt-5 md:grid grid-cols-2  bg-right">
    <div className="right max-w-lg space-y-5 md:ml-16 px-5 md:px-0">
           <p className='text-2xl font-[500] '> EXPERIENCE THE HOTKEY LIGHTING
</p>
           <p className='text-xl font-[500] '>With MSI exclusive Hotkey Lighting, hardcore mobile gamer is easier to act in right motion even in complete darkness, optimizing the chance to win in the battlefield.</p>
            <p className='text-neutral-400'>* The number of instances supported will vary by model.</p>
         </div>
         <div className="left ">
           <img src={img} alt="" className=''/>
         </div>

    </div>
    
    
    </>
  )
}

export default Fps