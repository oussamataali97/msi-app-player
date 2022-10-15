import React from 'react'
import bluestacks from '../../public/BlueStacks_logo.png'

function MsiBluestacks() {
    return (
        <div className='bg-black md:h-screen md:py-10 md:flex justify-center items-center '>
            <div className="box lg:bg-[rgba(199,0,3,.3)] flex justify-center items-center  flex-col md:max-w-4xl md:mx-auto md:px-10 space-y-2 md:py-10 " >
                <img src={bluestacks} alt="" className='  md:w-full' />
                <p className='text-center leading-10 text-white md:text-lg md:py-5 p-3'>Founded in 2011, Silicon Valley-based BlueStacks is the global leader in providing a
                    cross-platform service bridging the gap between mobile devices and PCs for over 300 million gamers worldwide.
                    Developed under an exclusive partnership with BlueStacks, the MSI App Player, brings the most advanced
                    gaming experience to MSI’s market-leading gaming computers.
                    The partnerships provides deep integration for both companies allowing MSI PCs to run mobile
                    games seamlessly while leveraging custom features such as game-specific keyboard backlighting
                    and cutting-edge graphics.</p>
                <div className="buttons flex flex-col md:flex-row justify-around space-y-4 pb-4 md:w-full text-white md:text-2xl font-[600]">
                    <button className='bg-gradient-to-b from-[#bb2f00] to-[#ff0000] rounded-md md:px-8 px-3 py-5 md:py-4'>Learn More</button>
                    <button className='bg-gradient-to-b from-[#bb2f00] to-[#ff0000] rounded-md md:px-8 px-3 py-5 md:py-4'>Bluestacks FAQ'S</button>
                    <button className='bg-gradient-to-b from-[#bb2f00] to-[#ff0000] rounded-md md:px-8 px-3 py-5 md:py-4'>Download</button>
                </div>
            </div>

        </div>
    )
}

export default MsiBluestacks