import React from 'react'
import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'
import P4 from '../assets/P4.png'
import C1 from '../assets/C1.png'
import C2 from '../assets/C2.png'
import C3 from '../assets/C3.png'
import C4 from '../assets/C4.png'
import banner from '../assets/Banner.png'



const WorkGraphic = () => {
    return (
        <>
            <div className="shadow-[0px_9px_0px_#D86072] bg-[#1F222E] text-center mb-1.5">
                <p className="text-[#D86072] text-[28px] md:text-[28px] lg:text-[28px] font-normal py-2">
                    Graphic Design
                </p>
            </div>

            <div className='flex justify-center' >
                <p className="text-[#D86072] [text-shadow:1px_0px_0px_black,-1px_0px_0px_black,0px_1px_0px_black,0px_-1px_0px_black,1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] text-lg  text-[28px] tracking-wide md:text-[28px] lg:text-[28px] font-normal py-8 px-8 lg:px-16">Festive Posts</p>
            </div>


            <div>
                <p className='text-[#1f222e] text-center text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-32 pb-8'><span className='font-semibold'>Designed vibrant and engaging posts </span>for Diwali, Dussehra, Christmas, and other celebrations, maintaining a professional yet festive theme for <span className='font-semibold'>Developers Community.</span>
                </p>
            </div>

            <div className='px-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:px-16 pb-8'>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={P1} className='p-0.2 bg-[#white] ' alt="P1" />
                </div>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={P2} className='p-0.2 bg-[#white]' alt="P2" />
                </div>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={P3} className='p-0.2 bg-[#white]' alt="P3" />
                </div>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={P4} className='p-0.2 bg-[#white]' alt="P4" />
                </div>
            </div>

            <div className='flex justify-center' >
                <p className="text-[#D86072] [text-shadow:1px_0px_0px_black,-1px_0px_0px_black,0px_1px_0px_black,0px_-1px_0px_black,1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] text-lg  text-[28px] tracking-wide md:text-[28px] lg:text-[28px] font-normal py-8 px-8 lg:px-16">Carousel</p>
            </div>

            <div>
                <p className='text-[#1f222e] text-center text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-32 pb-8'>Designed an engaging carousel showcasing expert mentorship, industry exposure, hands-on learning, and career opportunities in fashion design.
                </p>
            </div>

            <div className='px-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:px-16 pb-8'>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={C1} className='p-0.2 bg-[#white] ' alt="C1" />
                </div>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={C2} className='p-0.2 bg-[#white]' alt="C2" />
                </div>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={C3} className='p-0.2 bg-[#white]' alt="C3" />
                </div>
                <div className="overflow-hidden w-full rounded-[4px] shadow-[0.1px_0.1px_2px_#000000] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <img src={C4} className='p-0.2 bg-[#white]' alt="C4" />
                </div>
            </div>

            <div className='flex justify-center' >
                <p className="text-[#D86072] [text-shadow:1px_0px_0px_black,-1px_0px_0px_black,0px_1px_0px_black,0px_-1px_0px_black,1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] text-lg  text-[28px] tracking-wide md:text-[28px] lg:text-[28px] font-normal py-8 px-8 lg:px-16"> Advertisment Banner</p>
            </div>

            <div>
                <p className='text-[#1f222e] text-center text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-32 pb-8'>Designed a professional and engaging dental care banner, highlighting comprehensive services, advanced technology, and expert care to encourage appointments and build trust.
                </p>
            </div>

            <div className="overflow-hidden w-full pb-8">
                <img src={banner} alt="banner"/>
            </div>
        </>
    )
}

export default WorkGraphic
