import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { FiSun, FiMoon } from "react-icons/fi";
import { Link} from 'react-scroll'

export default function Nav ({theme, handleThemeSwitch}) {

     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

    return (
        <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 font-bold text-xl font-mono backdrop-blur-md dark:text-white z-10">

      <div className="hidden md:flex items-center">
        <button 
        type="button"
        onClick={handleThemeSwitch}
        className="p-2 rounded-md text-4xl" >{theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>

         {/* menu */}
            
        <ul className="hidden md:flex space-x-8 ml-auto"> 

            <li> <Link to="home" smooth={true} duration={500} style={{ cursor: "pointer" }} >Home</Link></li>
            <li> <Link to="about" smooth={true} duration={500} style={{ cursor: "pointer" }} >About</Link></li>
            <li> <Link to="skills" smooth={true} duration={500} style={{ cursor: "pointer" }}>Skills</Link></li>
            <li> <Link to="projects" smooth={true} duration={500} style={{ cursor: "pointer" }}>Projects</Link></li>
            <li> <Link to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} >Contact</Link></li>
    
        </ul>
    
        {/* hamburger */}

        <div onClick={toggleMobileMenu} className="md:hidden z-10">
            {!isMobileMenuOpen ? <FaBars /> : <FaTimes /> }
        </div>

        {/* mobile menu */}

         <ul className={!isMobileMenuOpen ? "hidden" : "absolute left-0 top-0 w-full h-screen bg-homeGreen dark:bg-darkPurple2 flex flex-col justify-center items-center"}>
              <li className="text-4xl py-6"> <a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li className="text-4xl py-6"> <a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li className="text-4xl py-6"> <a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li className="text-4xl py-6"><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li className="text-4xl py-6"><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            <li className="text-4xl py-6">  
            <button type="button" onClick={handleThemeSwitch} className="p-2 rounded-md" >{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
            </li>
        </ul>

        </nav>
    )

}