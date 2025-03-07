import React from 'react'
import photo from '../assets/photo.png'

const HeroMain = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:px-8'>
            <div className='mx-4 py-24 px-4 border-x-2 border-b-2  bg-[rgb(198,194,242)] lg:py-40 lg:basis-7/12  lg:flex lg:flex-col lg:justify-center lg:mr-0'>
                <p className='mb-4 text-center text-2xl md:text-4xl lg:text-[36px] font-semibold lg:text-left'>Hello,I'm Ashmita</p>
                <p className=' text-lg text-center lg:text-left'>A passionate <span className='font-bold font-mono'>UI/UX designer</span> from <span className='font-bold font-mono'>Lucknow</span></p>
            </div>
            <div className='flex pb-12 basis-5/12 justify-center border-x-2 lg:border-l-0 border-b-2 mx-4 lg:ml-0'>
            <img src={photo} className='h-[48vh] md:h-[55vh] object-cover ' alt="Ashmita" />
            </div>
        </div>

        // <div className='px-4'>
        //     <div className='flex flex-col md:flex-row md:mx-4 lg:mx-4 lg:px-8 '>
        //         <div className=' py-16 basis-7/12  flex flex-col justify-center border-x-2 pl-4 bg-[#C6C2F2]  border-b-2 gap-4 '>
        //             <p className='w-full text-left text-2xl md:text-4xl lg:text-[36px] font-semibold'>Hello,I'm Ashmita</p>
        //             <p className='w-full text-lg text-left'>A passionate <span className='font-bold font-mono'>UI/UX designer</span> from <span className='font-bold font-mono'>Lucknow</span></p>
        //         </div>
        //         <div className='pb-12  basis-5/12 border-x-2 md:border-b-2 lg:border-b-2  flex justify-center'>
        //             <img src={photo} className='h-[50vh] object-cover ' alt="Ashmita" />
        //         </div>

        //     </div>
        // </div>






    )
}

export default HeroMain
