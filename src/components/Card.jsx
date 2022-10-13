import React from 'react'
import laptops from '../../public/pd1.png'

import picture from '../../public/bg-pd1.png'

import laptops2 from '../../public/pd2.png'

import picture2 from '../../public/bg-pd2.png'

import laptops3 from '../../public/pd3.png'

import picture3 from '../../public/bg-pd3.png'
import laptops4 from '../../public/pd4.png'

import picture4 from '../../public/bg-pd4.png'

function Card() {
  return (
    <div className='grid grid-cols-4  text-white'>
        <div className='relative saturate-10 hover:saturate-150 cursor-pointer ease-in duration-300 border-t-yellow-500 hover:border-t-4'>
        <img src={picture} alt="" className='	'/>
        <div className="details absolute bottom-0 right-3 flex items-center justofy-center flex-col  text-center">
            <img src={laptops} alt="" className='w-14 md:w-full' />
        <p className='text-sm md:text-xl md:font-semibold pb-3'>Laptop</p>

        </div>

        </div>
        <div className='relative saturate-10 hover:saturate-150 cursor-pointer ease-in duration-300 border-t-yellow-500 hover:border-t-4'>
        <img src={picture2} alt="" className='	'/>
        <div className="details absolute bottom-0 right-3 flex items-center justofy-center flex-col  text-center">
            <img src={laptops2} alt="" className='w-14 md:w-full' />
        <p className='text-sm md:text-xl md:font-semibold pb-3'>Graphic Cards</p>

        </div>

        </div>

        <div className='relative saturate-10 hover:saturate-150 cursor-pointer ease-in duration-300 border-t-yellow-500 hover:border-t-4'>
        <img src={picture3} alt="" className='	'/>
        <div className="details absolute bottom-0 right-3 flex items-center justofy-center flex-col  text-center">
            <img src={laptops3} alt="" className='w-14 md:w-full' />
        <p className='text-sm md:text-xl md:font-semibold pb-3'>Motherboards</p>

        </div>

        </div>

        <div className='relative saturate-10 hover:saturate-150 cursor-pointer ease-in duration-300 border-t-yellow-500 hover:border-t-4'>
        <img src={picture4} alt="" className='	'/>
        <div className="details absolute bottom-0 right-3 flex items-center justofy-center flex-col  text-center">
            <img src={laptops4} alt="" className='w-14 md:w-full' />
        <p className=' text-sm md:text-xl md:font-semibold pb-3'>Monitors</p>

        </div>

        </div>
       
    </div>
  )
}

export default Card