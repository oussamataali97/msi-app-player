import React from 'react'
import bann from '/public/Multi-Instance-model.png'

import img from '/public/Hotkey-Lighting-model.gif'
import { useEffect } from 'react';

import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'



function Fps() {
  const [ref,inView]=useInView()
  const animation=useAnimation()
  const animation3=useAnimation()
  const [ref2,inView2]=useInView()
  const [ref3,inView3]=useInView()
  const animation2=useAnimation()

  useEffect(()=>{
    if(inView){
animation.start({
  y:0,
  opacity: 1

})
    } if(!inView){
      animation.start({
        y:40,
        opacity: 0 
      })
    }

  },[inView])


  //Instance use Effect
  useEffect(()=>{
    if(inView2){
animation2.start({
  opacity: 1

})
    } if(!inView2){
      animation2.start({
        opacity: 0
      })
    }

  },[inView2])

  //another instance

  useEffect(()=>{
    if(inView3){
animation3.start({
  opacity: 1

})
    } if(!inView3){
      animation3.start({
        opacity: 0
      })
    }

  },[inView3])
  return (

    <>
     
    <div  className="sec bg-black h-full md:pt-32 md:px-16 pt-5 ">
    <motion.div  
    ref={ref}    
      animate={animation}
      transition={{
        duration:1,
        ease:'easeInOut'

      }}
      >
         <div className="text text-center text-white space-y-7">
       <p className='font-[700] text-3xl'>ENJOY ULTRA HIGH FPS IN MOBILE GAMES</p>
        <p  className='font-[500] text-xl'>Feel the smooth visuals by enabling high frame rates. Experience up to 240 FPS with better reaction time and low latency, leading to visual clarity in any movement.
    
</p>
    <p  className='font-[300] text-lg text-neutral-300'>* The actual frame rate may vary by model configuration and game setting.

</p>
       </div>
<div className="bg-contain md:bg-center bg-no-repeat overflow-x-hidden bg-[url('/public/240FPS-xs.jpg')] h-72 md:h-screen w-full text-center   text-white">
      
  </div>
  </motion.div>
    </div>

    <div  className="text-white bg-[url('/public/Multi-Instance-bg.jpg')] md:h-screen bg-cover items-center  md:grid grid-cols-2 pt-5 bg-right">

    <div  className="right max-w-lg space-y-5 md:ml-16 px-6 md:px-0">
    <motion.div      
    ref={ref2}
      animate={animation2}
      transition={{
        duration:1,
        ease:'easeIn'

      }}
      >
           <p className='text-4xl font-[600]'>MULTI-INSTANCE</p>
           <p className='text-2xl font-[500] '> Play Multiple Games at the Same Time</p>
           <p className='text-xl font-[500] '>Run multiple games simultaneously with no confusion and compromise. It provides performance tuning through Multi-Instance Manager to better fit diverse circumstances in each instance.</p>
            <p className='text-neutral-400'>* The number of instances supported will vary by model.</p>
            </motion.div>
         </div>
         <div className="left ">
         <motion.div      
    ref={ref2}
      animate={animation2}
      transition={{
        duration:0.3,
        ease:'easeIn'

      }}
      >
           <img src={bann} alt="" className=''/>
           </motion.div>
         </div>

    </div>


    <div className="text-white bg-[url('/public/backgroundd.jpg')] md:h-screen bg-cover items-center  pt-5 md:grid grid-cols-2  bg-right">
    <div className="right max-w-lg space-y-5 md:ml-16 px-5 md:px-0">
    <motion.div      
    ref={ref3}
      animate={animation3}
      transition={{
        duration:0.3,
        ease:'easeIn'

      }}
      >
           <p className='text-2xl font-[500] '> EXPERIENCE THE HOTKEY LIGHTING
</p>
           <p className='text-xl font-[500] '>With MSI exclusive Hotkey Lighting, hardcore mobile gamer is easier to act in right motion even in complete darkness, optimizing the chance to win in the battlefield.</p>
            <p className='text-neutral-400'>* The number of instances supported will vary by model.</p>
            </motion.div>
         </div>
         <div className="left ">
         <motion.div      
    ref={ref3}
      animate={animation3}
      transition={{
        duration:2,
        ease:'easeIn'

      }}
      >
           <img src={img} alt="" className=''/>
           </motion.div>
         </div>

    </div>

    
    
    </>
  )
}

export default Fps