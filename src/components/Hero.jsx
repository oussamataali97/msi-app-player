import React from 'react'
import hero from '/public/kv-model.png'
import console from '/public/App-player-icon.png'
import background from '/public/pic.jpg'

function Hero() {
  return (
    <div className='bg-black text-white relative '>
      <div className="background  flex flex-col bg-[url('/public/pic.jpg')]  ">
      <div className=" flex justify-center items-center ">
        <p className='text-center text-2xl md:text-8xl font-[400] py-10 mr-5 '>MSI APP PLAYER</p>
        <img src={console} alt="" className='hidden md:block w-16 md:w-24'/>
        <ul className='hidden xl:block'>
          <li className='absolute top-[26rem] left-32 font-[600] text-xl w-64'>Enjoy higher frame ratio. Support up to 240FPS</li>
          <li className='absolute top-[35rem] left-32 font-[600] text-xl w-64'>Multiple games at once</li>
          <li className='absolute top-[42rem] left-32 font-[600] text-xl w-64'>Via keyboard, mouse, and game controller</li>
          <li className='absolute top-[28rem] right-[8rem] font-[600] text-xl w-32'>Play at full capacity</li>
          <li className='absolute top-[35rem] right-[8rem] font-[600] text-xl w-32'>Game uninterrupted</li>
        </ul>
        </div>
    <button className='bg-red-600 px-8 md:px-16 font-[600] text-lg py-4 mx-auto'>Download</button>
        <p className='text-center text-2xl font-[400] py-10 mr-5'>Seamless gaming experience between mobile and PC</p>

        <img src={hero} alt="" />
        <p className=' text-xl text-center font-[400] p-4 md:p-20 '>The multi tasks for Android platform gaming with keyboard, mouse, and game controller to win your games faster and easier.</p>

      </div>

       
    </div>
  )
}

export default Hero