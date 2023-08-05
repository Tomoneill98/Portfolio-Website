import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Nav () {

    const [nav, setNav] = useState(false)
    function handleClick () {
        setNav(!nav)
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 font-bold text-2xl text-gray-600 font-mono ">

         {/* menu */}
            
        <ul className="hidden md:flex space-x-10"> 
            <li> <a href="#home">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    
        {/* hamburger */}

        <div onClick= {handleClick}className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/* mobile menu */}

         <ul className={!nav ? "hidden" : "absolute left-0 top-0 w-full h-screen bg-black flex flex-col justify-center items-center"}> 
            <li className="text-4xl py-6">Home</li>
            <li className="text-4xl py-6">About</li>
            <li className="text-4xl py-6">Projects</li>
            <li className="text-4xl py-6">Contact</li>
        </ul>

        </div>
    )

}