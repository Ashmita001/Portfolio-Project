import React from 'react'
import figma from '../assets/figma.png'
import canva from '../assets/canva.png'
import java from '../assets/java.png'
import nodejs from '../assets/nodejs.png'
import mysql from '../assets/mysql.png'
import npm from '../assets/npm.png'
import npm2 from '../assets/npm2.png'
import bootstrap4 from '../assets/bootstrap4.png'
import bootstrap5 from '../assets/bootstrap5.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import postgresql from '../assets/postgresql.png'
import python from '../assets/python.png'
import css from '../assets/css.png'



const TechnicalSkills = () => {
    return (
        <div className='mx-4 border-b-2 border-x-2 flex-row lg:px-0 lg:mx-12'>
            <div className='bg-[#1F222E] px-4 flex flex-row items-center'>
                <h4 className='text-left text-2xl text-[#FFF6EE] md:text-4xl lg:text-[36px] font-normal py-4'>Technical Skills</h4>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 ">
                <div className="p-4">
                    <img src={figma} className="w-full object-contain" alt="figma" />
                </div>
                <div className="p-4">
                    <img src={canva} className="w-full object-contain" alt="canva" />
                </div>
                <div className="p-4">
                    <img src={java} className="w-full object-contain" alt="java" />
                </div>
                <div className="p-4">
                    <img src={nodejs} className="w-full object-contain" alt="nodejs" />
                </div>
                <div className="p-4">
                    <img src={mysql} className="w-full object-contain" alt="mysql" />
                </div>
                <div className="p-4">
                    <img src={npm} className="w-full object-contain" alt="npm" />
                </div>
                <div className="p-4">
                    <img src={npm2} className="w-full object-contain" alt="npm2" />
                </div>
                <div className="p-4">
                    <img src={bootstrap4} className="w-full object-contain" alt="bootstrap4" />
                </div>
                <div className="p-4">
                    <img src={bootstrap5} className="w-full object-contain" alt="bootstrap5" />
                </div>
                <div className="p-4">
                    <img src={js} className="w-full object-contain" alt="js" />
                </div>
                <div className="p-4">
                    <img src={react} className="w-full object-contain" alt="react" />
                </div>
                <div className="p-4">
                    <img src={postgresql} className="w-full object-contain" alt="postgresql" />
                </div>
                <div className="p-4">
                    <img src={css} className="w-full object-contain" alt="css" />
                </div>
                <div className="p-4">
                    <img src={python} className="w-full object-contain" alt="python" />
                </div>
            </div>



        </div>
    )
}

export default TechnicalSkills
