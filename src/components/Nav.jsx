import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { FiSun, FiMoon } from "react-icons/fi";
import { Link} from 'react-scroll'

export default function Nav ({theme, handleThemeSwitch}) {

    const [nav, setNav] = useState(false)

    function handleClick () {
        setNav(!nav)
    }

      function handleItemClick() {
        setNav(false);
    }

    return (
        <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 font-bold text-xl font-mono backdrop-blur-md dark:text-white z-10">

          

      <div className="hidden md:flex items-center">
        <button 
        type="button"
        onClick={handleThemeSwitch}
        className="p-2 rounded-md text-4xl" >{theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

      </div>

         {/* menu */}
            
        <ul className="hidden md:flex space-x-8 ml-auto"> 

            <li> <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }} >Home</Link></li>
            <li> <Link to="about" smooth={true} duration={500} style={{ cursor: 'pointer' }} >About</Link></li>
            <li> <Link to="skills" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Skills</Link></li>
            <li> <Link to="projects" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Projects</Link></li>
            <li> <Link to="contact" smooth={true} duration={500} style={{ cursor: 'pointer' }} >Contact</Link></li>
    
        </ul>
    
        {/* hamburger */}

        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/* mobile menu */}

         <ul className={!nav ? "hidden" : "absolute left-0 top-0 w-full h-screen bg-homeGreen dark:bg-darkPurple2 flex flex-col justify-center items-center"}>
              <li className="text-4xl py-6"> <a href="#home" onClick={handleItemClick}>Home</a></li>
            <li className="text-4xl py-6"> <a href="#about" onClick={handleItemClick}>About</a></li>
            <li className="text-4xl py-6"> <a href="#skills" onClick={handleItemClick}>Skills</a></li>
            <li className="text-4xl py-6"><a href="#projects" onClick={handleItemClick}>Projects</a></li>
            <li className="text-4xl py-6"><a href="#contact" onClick={handleItemClick}>Contact</a></li>
            <li className="text-4xl py-6">  
            <button type="button" onClick={handleThemeSwitch} className="p-2 rounded-md" >{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>
            </li>
        </ul>

        </nav>
    )

}