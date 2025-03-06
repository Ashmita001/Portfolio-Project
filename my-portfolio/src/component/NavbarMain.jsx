import React from 'react'

const NavbarMain = () => {
    return (
        <div className='bg-[#D6DC82] border-b-2 border-black flex flex-row justify-between font-azeret lg:mg-4 lg:px-8' >
            <div className='ml-8 py-4 border-l-2 pl-4 flex'>
                <span className="font-regular flex items-end text-2xl">PORTFOLIO</span>
            </div>
            <div className='mr-8 py-4 border-r-2 pr-4 flex  flex-row lg:basis-1/3 justify-end gap-2 sm:gap-6 md:gap-8'>
                <span className="font-regular  flex-row-reverse items-end flex text-sm pr-3 md:pr-0 sm:pr-0 lg:basis-1/3 ">About</span>
                <span className="font-regular  flex-row-reverse items-end flex text-sm pr-3 md:pr-0 sm:pr-0 lg:basis-1/3">Work</span>
                <span className="font-regular  flex-row-reverse items-end flex text-sm lg:basis-1/3">Contact</span>
            </div>

        </div>
    )
}

export default NavbarMain





