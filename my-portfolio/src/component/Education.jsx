import React from 'react'

const Education = () => {
    return (
        <div className='mx-4 border-b-2 border-x-2 flex-row lg:px-0 lg:mx-12 '>
            <div className='bg-[#1F222E] px-4 flex flex-row items-center'>
                <h4 className='text-left text-2xl text-[#FFF6EE] md:text-4xl lg:text-[36px] font-normal py-4'>Education</h4>
            </div>
            <div className='bg-[#D6DC82] flex flex-col px-4 py-4'>
                <div className='flex flex-col pb-2'>
                    <div className='flex flex-row justify-between py-4 '>
                        <div className='flex-3/5 font-medium'>BTech in CSE</div>
                        <div className='flex-2/5 text-right font-medium'>2023-2027</div>
                    </div>
                    <div className='font-light'>
                        University of Lucknow, Uttar Pradesh
                    </div>
                </div>
                <div className='flex flex-col pb-2'>
                    <div className='flex flex-row justify-between py-4'>
                        <div className='flex-3/5 font-medium'>BS in Data Science and Applications (Foundation Level)</div>
                        <div className='flex-2/5 text-right font-medium'>2022-2024</div>
                    </div>
                    <div className='font-light'>
                        Indian Institute of Technology, Madras
                    </div>
                </div>
                <div className='flex flex-col pb-2'>
                    <div className='flex flex-row justify-between py-4'>
                        <div className='flex-3/5 font-medium'>BS in Data Science and Applications (Diploma Level)</div>
                        <div className='flex-2/5 text-right font-medium'>2025-2027</div>
                    </div>
                    <div className='font-light'>
                        Indian Institute of Technology, Madras
                    </div>
                </div>
                <div className='flex flex-col pb-2'>
                    <div className='flex flex-row justify-between py-4'>
                        <div className='flex-3/5 font-medium'>Foundations of User Experience (UX) Design</div>
                        <div className='flex-2/5 text-right font-medium'>Aug-2023</div>
                    </div>
                    <div className='font-light'>
                        Google UX Design, Coursera
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education
