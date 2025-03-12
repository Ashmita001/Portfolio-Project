import React from 'react'
import mail from '../assets/email.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import discord from '../assets/discord.png'
import instagram from '../assets/insta.png'
import twitter from '../assets/twitterx.png'

const ContactSection = () => {
    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    return (
        <>
            <div className='flex flex-col px-8'>
                <div className='py-50'></div>
                <p className='text-center text-[32px] md:text-[32px] lg:text-[32px] font-normal py-2'>Let's Connect</p>
                <p className='text-center text-[16px] md:text-[16px] lg:text-[16px] font-normal py-2'>Have a project in mind or just want to say hello? Let&apos;s create something amazing together!</p>


            </div>

            <div className=' grid justify-items-center grid-cols-6 md:grid-cols-6 md:gap-0 gap-0 md:px-48 px-8 pb-8'>

                <button className='bg-[#D86072] border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1
                 hover:translate-2 duration-300 ease-in-out transform hover:scale-105 hover:[box-shadow:0px_0px_0px_black] focus:border-[#000000] focus:outline-none active:[box-shadow:0px_0px_0px_black]  active:scale-95 
                 ' onClick={() => openLink('mailto:ashmita.202004@gmail.com')}>
                    <img src={mail} className='' alt="mail" />
                </button>
                <button className='bg-[#D6DC82] border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1
                hover:translate-2 duration-300 ease-in-out transform hover:scale-105 hover:[box-shadow:0px_0px_0px_black] focus:border-[#000000] focus:outline-none active:scale-95 active:[box-shadow:0px_0px_0px_black]  '
                onClick={() => openLink('https://github.com/Ashmita001')}>
                    <img src={github} className='' alt="github" />
                </button>
                <button className='bg-[#c6c2f2] border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1 
                hover:translate-2 duration-300 ease-in-out transform hover:scale-105 hover:[box-shadow:0px_0px_0px_black] focus:border-[#000000] focus:outline-none active:scale-95 active:[box-shadow:0px_0px_0px_black] '
                onClick={() => openLink('https://www.linkedin.com/in/ashmita-328350273/')}>
                    <img src={linkedin} className='' alt="linkedin" />
                </button>
                <button className='bg-[#c6c2f2] border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1
                hover:translate-2 duration-300 ease-in-out transform hover:scale-105 hover:[box-shadow:0px_0px_0px_black] focus:border-[#000000] focus:outline-none active:scale-95 active:[box-shadow:0px_0px_0px_black] '
                onClick={() => openLink('http://discordapp.com/users/ashmita.01')}
                
                >
                    <img src={discord} className='' alt="discord" />
                </button>
                <button className='bg-[#D6DC82] border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1
                hover:translate-2 duration-300 ease-in-out transform hover:scale-105 hover:[box-shadow:0px_0px_0px_black] focus:border-[#000000] focus:outline-none active:scale-95 active:[box-shadow:0px_0px_0px_black] '
                onClick={() => openLink('https://www.instagram.com/yupp_its_ash/')}>
                
                    <img src={instagram} className='' alt="instagram" />
                </button>
                <button className='bg-[#D86072] border-2 justify-items-center [box-shadow:4px_4px_0px_black] w-[3em] h-[3em] p-1
                hover:translate-2 duration-300 ease-in-out transform hover:scale-105 hover:[box-shadow:0px_0px_0px_black] focus:border-[#000000] focus:outline-none active:scale-95 active:[box-shadow:0px_0px_0px_black] '
                onClick={() => openLink('https://twitter.com/its_ashmita21')}>
                    <img src={twitter} className='' alt="twitter" />
                </button>


            </div>


        </>







    )
}

export default ContactSection
