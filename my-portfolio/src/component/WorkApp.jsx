import React from 'react'
import travel from '../assets/travel.mp4'
import movie from '../assets/Movie.mp4'
import M1 from '../assets/M1.png'
import M2 from '../assets/M2.png'
import M3 from '../assets/M3.png'
import M4 from '../assets/M4.png'
import M5 from '../assets/M5.png'
import M6 from '../assets/M6.png'



const WorkApp = () => {
    return (
        <>
            <div className="shadow-[0px_9px_0px_#D6DC82] bg-[#1F222E] text-center mb-1.5">
                <p className="text-[#D6DC82] text-[28px] md:text-[28px] lg:text-[28px] font-normal py-2">
                    App Design
                </p>
            </div>

            <div >
                <p className="text-[#D6DC82] [text-shadow:1px_0px_0px_black,-1px_0px_0px_black,0px_1px_0px_black,0px_-1px_0px_black,1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] text-lg  text-[28px] tracking-wide md:text-[28px] lg:text-[28px] font-semibold py-8 px-8 lg:px-16">Travel App</p>
            </div>

            <div>
                <p className='text-[#1f222e] text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-16 pb-8'>To enhance my UI/UX design skills, I took on the challenge of creating a travel app design by following YouTube tutorials. This project served as my introduction to Figma, offering a hands-on approach to <span className='font-semibold'>mastering the tool's features </span>and<span className='font-semibold'> design principles.</span>
                </p>
            </div>

            <div className='flex flex-col justify-center items-center md:flex-row md:px-8 lg:px-16'>
                {/* pl-8 md:px-16 pb-4  */}
                <div className="lg:pl-44 w-[60%] flex-1 justify-items-center ">
                    <video src={travel} className="w-[75%] md:w-[50%] rounded-[55px] md:rounded-[45px] lg:rounded-[40px]"
                        loop
                        autoPlay
                        muted />
                </div>
                {/* pl-12  pr-8 md:pl-24 pb-4 */}
                {/* pl-8 md:px-16 pb-4 */}
                <div className=' text-[#1f222e] flex-1 pt-12 lg:pt-12 justify-center md:items-center'>
                    <p className='px-4 md:px-0 pb-4 font-light'>Challenges:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12 pr-8 md:pr-8 pb-4'>
                        <li>Navigating Figma's interface as a beginner.</li>
                        <li>Understanding and applying color theory.</li>
                        <li>Designing effective and user-friendly layouts.</li>
                    </ul>
                    <p className='px-4 pb-2 md:px-0 font-light'>Learnings:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12 pr-8  md:pr-8 pb-4'>
                        <li> Mastered Figma features like <span className='font-medium'>auto-layout and components.</span>
                        </li>
                        <li><span className='font-medium'>Gained practical experience</span> in design workflows.
                        </li>
                        <li>Improved problem-solving skills through hands-on practice.
                        </li>
                    </ul>
                </div>

                <div className='grid grid-cols-6 gap-4'>

                </div>

            </div>






            <div >
                <p className="text-[#D6DC82] [text-shadow:1px_0px_0px_black,-1px_0px_0px_black,0px_1px_0px_black,0px_-1px_0px_black,1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] text-lg  text-[28px] tracking-wide md:text-[28px] lg:text-[28px] font-semibold py-8 px-8 lg:px-16">Movie Ticket Booking App</p>
            </div>

            <div>
                <p className='text-[#1f222e] text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-16 pb-8'>As part of my <span className='font-semibold'>Figma learning journey,</span> I designed a movie ticket booking app UI to explore UI/UX principles and enhance my design skills. This project allowed me to practice creating interactive and user-friendly interfaces.
                </p>
            </div>

            <div className='flex flex-col justify-center items-center md:flex-row md:px-8 lg:pb-4 lg:px-16'>
                {/* pl-8 md:px-16 pb-4  */}
                <div className="lg:pl-44 w-[60%] flex-1 justify-items-center  ">
                    <video src={movie} className="w-[75%] md:w-[50%] rounded-[40px] md:rounded-[45px] lg:rounded-[40px]"
                        loop
                        autoPlay
                        muted />
                </div>
                {/* pl-12  pr-8 md:pl-24 pb-4 */}
                {/* pl-8 md:px-16 pb-4 */}
                <div className=' text-[#1f222e] md:flex-1 pt-12 lg:pt-12 justify-center md:items-center'>
                    <p className='px-4 md:px-0 pb-2 font-light'>Challenges:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12 pr-8 md:pr-8 pb-4'>
                        <li>Understanding the <span className='font-semibold'>prototyping process.</span></li>
                        <li>Creating an <span className='font-semibold'>intuitive and visually appealing layout.</span></li>
                        <li>Designing a seamless user flow for booking tickets.</li>
                    </ul>
                    <p className='px-4 md:px-0 pb-2 font-light'>Learnings:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12 pr-8  md:pr-8 pb-4'>
                        <li> Improved UI/UX skills, including layout structuring.
                        </li>
                        <li>Gained hands-on experience with <span className='font-medium'>Figma&apos;s design tools.</span>
                        </li>
                        <li>Enhanced <span className='font-medium'>problem-solving</span> and <span className='font-medium'>critical thinking</span> in design.
                        </li>
                    </ul>
                </div>

            </div>


            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-1 px-4 lg:px-12 py-4'>
                <div className="p-4 justify-items-center">
                    <img src={M1} className="w-[90%] lg:w-full object-contain" alt="M1" />
                </div>
                <div className="p-4 justify-items-center">
                    <img src={M2} className="w-[90%] lg:w-full object-contain" alt="M2" />
                </div>
                <div className="p-4 justify-items-center">
                    <img src={M3} className="w-[90%] lg:w-full object-contain" alt="M3" />
                </div>
                <div className="p-4 justify-items-center">
                    <img src={M4} className="w-[90%] lg:w-full object-contain" alt="M4" />
                </div>
                <div className="p-4 justify-items-center">
                    <img src={M5} className="w-[90%] lg:w-full object-contain" alt="M5" />
                </div>
                <div className="p-4 justify-items-center">
                    <img src={M6} className="w-[90%] lg:w-full object-contain" alt="M6" />
                </div>
            </div>



        </>
    )
}

export default WorkApp
