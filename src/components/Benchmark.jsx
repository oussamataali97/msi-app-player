import React from 'react'
import banner from '../../public/nblock02.png'
import screen1 from '../../public/Console-Mode-model1.png'
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {useAnimation} from 'framer-motion'


function Benchmark() {
  const [ref,inView]=useInView()
  const [reff,inView2]=useInView()
  const animation=useAnimation()

  useEffect(()=>{
    if(inView){
animation.start({
  x:0,
  transition:{
    duration:0.3,
    ease:'easeIn'

  }

})
    } if(!inView){
      animation.start({
    x:'-100vw'
      })
    }

  },[inView])

  useEffect(()=>{
    if(inView2){
animation.start({
  x:0,
  transition:{
    duration:0.6,
    ease:'easeIn'

  }

})
    } if(!inView2){
      animation.start({
    x:900
      })
    }

  },[inView2])
  return (
    <>
    
    <div ref={ref}  className="bg-[url('/public/High-Performance-model.jpg')] md:h-screen md:bg-cover text-white grid md:grid-cols-2 p-10 justify-center items-center">

        <div className="left ">
          <p></p>
        </div>
        <div className="space-y-5 right " >
        <motion.div      
      animate={animation}
   
      >
          <p className='text-3xl font-[400] '>THE BEST CHOICE FOR MOBILE GAMING</p>
          <p className='text-2xl font-[300] '> MSI Gaming Laptop With App Player Delivers 6X Faster Performance Than Any Flagship Smartphone & Mobile Device.</p>
          <img src={banner} alt="" />
          </motion.div>

        </div>
      </div>

      
      <div ref={reff} className="overflow-x-hidden bg-[url('/public/Console-Mode-bg.jpg')] px-9 pt-16 bg-cover flex flex-col md:flex-row items-center justify-around  text-white">
   
       <div  className="right max-w-lg space-y-5 md:ml-16">
       <motion.div      
      animate={animation}
   
      >
           <p className='text-3xl font-[400]'>CONSOLE MODE</p>
           <p className='text-xl font-[200]'> Play Mobile Games as Console with Controller
 With the latest innovation, gamers can experience console-like control on laptops with intuitive UI dedicatedly designed for controllers.</p>
       </motion.div>
         </div>
         <div className="left md:w-1/2 flex-1 ">
           <img src={screen1} alt="" className='md:ml-10'/>
         </div>
       

      </div>
 
     

      </>
  )
}

export default Benchmark