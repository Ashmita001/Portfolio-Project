import React from 'react'

const NavbarMain = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='bg-[#D6DC82] border-b-2 border-black flex flex-row justify-between font-azeret lg:mg-4 lg:px-8' >
            <div className='ml-4 py-4 border-l-2 pl-4 flex'>
                <span className="font-regular flex items-end text-2xl">PORTFOLIO</span>
            </div>
            <div className='mr-4 py-4 border-r-2 pr-4 flex  flex-row lg:basis-1/3 justify-end gap-2 sm:gap-2 md:gap-8'>
                <button onClick={() => scrollToSection("about")} className="font-normal cursor-pointer flex items-end justify-end text-sm md:pr-0 sm:pr-0 lg:basis-1/3">
                    About
                </button>
                <button onClick={() => scrollToSection("work")} className="font-normal cursor-pointer flex items-end justify-end text-sm md:pr-0 sm:pr-0 lg:basis-1/3">
                    Work
                </button>
                <button onClick={() => scrollToSection("contact")} className="font-normal cursor-pointer flex items-end justify-end text-sm lg:basis-1/3">
                    Contact
                </button>

            </div>

        </div>
    )
}

export default NavbarMain





