import React from 'react';
import ActionButton from './ActionButton';
import mail from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import discord from '../assets/discord.png';
import instagram from '../assets/insta.png';
import twitter from '../assets/twitterx.png';

const ContactSection = () => {
    return (
        <>
            <div className='flex flex-col justify-between min-h-screen'>

                <div id='contact' className='place-content-center flex-grow'>
                    <div className='flex flex-col px-8'>
                        <div className=''></div>
                        <p className='text-center text-[32px] font-normal py-2'>Let's Connect</p>
                        <p className='text-center text-[13px] md:text-[16px] font-normal pb-8 md:px-40'>
                            Have a project in mind or just want to say hello? Let&apos;s create something amazing together!
                        </p>
                    </div>

                    <div className='grid justify-items-center grid-cols-6 md:grid-cols-6 md:gap-0 gap-0 md:px-48 lg:px-68 px-8 pb-8'>
                        <ActionButton url="mailto:ashmita.202004@gmail.com" icon={mail} alt="mail" color="#D86072" />
                        <ActionButton url="https://github.com/Ashmita001" icon={github} alt="github" color="#D6DC82" />
                        <ActionButton url="https://www.linkedin.com/in/ashmita-328350273/" icon={linkedin} alt="linkedin" color="#c6c2f2" />
                        <ActionButton url="http://discordapp.com/users/ashmita.01" icon={discord} alt="discord" color="#D86072" />
                        <ActionButton url="https://www.instagram.com/yupp_its_ash/" icon={instagram} alt="instagram" color="#D6DC82" />
                        <ActionButton url="https://twitter.com/its_ashmita21" icon={twitter} alt="twitter" color="#c6c2f2" />
                        {/* <ActionButton url="https://twitter.com/hello" icon={twitter} alt="twitter" color="#c6c2f2" /> */}
                    </div>
                </div>




                <div className='mt-auto'>
                    <p className='text-[#d86072] [text-shadow:1px_0px_0px_black,-1px_0px_0px_black,0px_1px_0px_black,0px_-1px_0px_black,1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] font-normal tracking-wide text-center text-xl px-16 lg:text-2xl pb-8'>Thank You for <span className='text-[#D6DC82]'>watching</span> my <span className='text-[#c6c2f2]'>portfolio</span></p>
                </div>
            </div>
        </>
    );
};

export default ContactSection;
