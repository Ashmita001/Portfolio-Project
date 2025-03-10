import React from 'react'
import prism from '../assets/prism.svg'
import miadaanmockup from '../assets/miadaanmockup.svg'
import maidaan from '../assets/maidaan.svg'
const WorkWeb = () => {
    return (
        <>
            <div className='mx-4 px-4 flex flex-col lg:px-4 lg:mx-12'>
                <h3 className='text-left text-[36px] md:text-[36px] lg:text-[36px] font-normal pt-5' >Work</h3>
            </div>

            <div className="shadow-[0px_9px_0px_#C6C2F2] bg-[#1F222E] text-center mb-1.5">
                <p className="text-[rgb(198,194,242)] text-[28px] md:text-[28px] lg:text-[28px] font-normal py-2">
                    Web Design
                </p>
            </div>
            {/* py-8 px-16 */}

            <div className='bg-[#0a0a0a]'>
                <p className="text-[rgb(198,194,242)] text-[28px] md:text-[28px] lg:text-[28px] font-normal py-8 px-8 lg:px-16">Prism 2.0</p>
            </div>

            <div className='bg-[#0a0a0a] '>
                <p className='text-[#FFF6EE] text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-16 pb-4'>Contributing to PRISM 2.0 UI – <span className='font-semibold'>The flagship tech fest of the University of Lucknow.</span> The website will showcase <span className='font-semibold'>event details, schedules, sponsors, team members, and a seamless registration system</span>, ensuring a smooth experience for participants.</p>
            </div>

            {/* <div className="bg-[#0a0a0a]">
                
            </div> */}
            {/* <div className='bg-[#0a0a0a] flex justify-center items-center p-4'>
            <img src={prismmockup} className='bg-[#0a0a0a]'></img>
            </div> */}

            <div className="bg-[#0a0a0a] overflow-hidden w-full">
                <img src={prism} alt="prism" />
            </div>

            <div className='bg-[#0a0a0a] text-[#fff6ee] pt-12'>
                <p className='pl-8 md:px-16 pb-4 font-light'>Challenges:</p>
                <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12  pr-8 md:pl-24 pb-4'>
                    <li>Designing an engaging, structured UI that balances aesthetics with usability.</li>
                    <li>Organizing large amounts of event data into a clear, navigable layout.</li>
                    <li>Ensuring the site could handle high traffic from students, sponsors, and organizers.</li>
                </ul>
                <p className='pl-8 md:px-16 pb-4 font-light'>Result:</p>
                <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12  pr-8 md:pl-24'>
                    <li> <span className='font-medium'>Seamless Registration</span>  – Designed a smooth and user-friendly sign-up process for participants.
                    </li>
                    <li><span className='font-medium'>Comprehensive Event Showcase</span>  – Effectively displayed event details, schedules, and sponsors.
                    </li>
                    <li><span className='font-medium'>Enhanced User Engagement</span>  – Interactive UI ensured an intuitive and engaging experience.</li>
                </ul>
            </div>








            <div className='bg-[#0a0a0a]'>
                <p className="text-[#D6DC82]  text-[28px] md:text-[28px] lg:text-[28px] font-normal py-8 px-8 lg:px-16">Maidaan</p>
            </div>

            <div className='bg-[#0a0a0a] '>
                <p className='text-[#FFF6EE] text-[16px] md:text-[16px] lg:text-[16px] font-extralight  px-8 lg:px-16 pb-4'>Worked on the Maidaan UI for the <span className='font-semibold'>Smart India Hackathon 2025,</span>a platform designed to <span className='font-semibold'>connect sports enthusiasts and organizers for events, tournaments, and fitness activities.</span>Our team <span className='font-semibold'>qualified for the internals round,</span> and the project aimed to enhance user engagement through a seamless design.</p>
            </div>


            <div className='flex flex-col md:flex-row'>
                <div className="bg-[#0a0a0a] px-8 flex justify-center md:justify-start">
                    <img src={miadaanmockup} className='p-4' alt="maidaan" />
                </div>

                <div className='bg-[#0a0a0a] text-[#fff6ee] pt-12'>
                    <p className='pl-8 md:px-16 pb-4 font-light'>Challenges:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12  pr-8 md:pl-24 pb-4'>
                        <li>Conducting in-depth research to understand the target audience and their needs.</li>
                        <li>Designing a clean, intuitive UI for a diverse user base.</li>
                        <li>Balancing multiple features (team registration, event scheduling, etc.) within a user-friendly interface.</li>
                    </ul>
                    <p className='pl-8 md:px-16 pb-4 font-light'>Result:</p>
                    <ul className='list-disc  text-[13px] md:text-[13px] lg:text-[13px] font-extralight  pl-12  pr-8 md:pl-24 pb-4'>
                        <li> <span className='font-medium'>Optimized Navigation</span> – Easy access to tournaments, team management, and event details.
                        </li>
                        <li>Recognized Innovation – <span className='font-medium'>Qualified for the internals round of SIH 2024</span>, validating the impact and potential of the project.
                        </li>
                    </ul>
                </div>

            </div>

            <div>
                <div className="bg-[#0a0a0a] overflow-hidden w-full py-4 lg:py-10">
                    <img src={maidaan}   alt="maidaan" />
                </div>
            </div>





        </>
    )
}

export default WorkWeb
