import React from 'react'
import travel from '../assets/travel.mp4'


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

            <div className='flex flex-col md:flex-row md:px-8 lg:px-16'>
                {/* pl-8 md:px-16 pb-4  */}
                <div className="lg:pl-44 flex-1 justify-items-center ">
                    <video src={travel} className="w-[75%] md:w-[50%] rounded-[55px] md:rounded-[45px] lg:rounded-[40px]"
                        loop
                        autoPlay
                        muted />
                </div>
                {/* pl-12  pr-8 md:pl-24 pb-4 */}
                {/* pl-8 md:px-16 pb-4 */}
                <div className=' text-[#1f222e] flex-1 pt-12 md:pt-0 lg:pt-12 justify-center md:items-start'>
                    <p className='px-8 md:px-0 pb-4 font-light'>Challenges:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12 pr-8 md:pr-8 pb-4'>
                        <li>Navigating Figma's interface as a beginner.</li>
                        <li>Understanding and applying color theory.</li>
                        <li>Designing effective and user-friendly layouts.</li>
                    </ul>
                    <p className='px-8 md:px-0 font-light'>Learnings:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12 pr-8  md:pr-8 pb-4'>
                        <li> Mastered Figma features like <span className='font-medium'>auto-layout and components.</span>
                        </li>
                        <li><span className='font-medium'>Gained practical experience</span> in design workflows.
                        </li>
                        <li>Improved problem-solving skills through hands-on practice.
                        </li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default WorkApp
