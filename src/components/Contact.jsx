import React from "react";
import {BsLinkedin, BsGithub, BsFileEarmarkText, BsEnvelope, BsTelephone} from "react-icons/bs"
import MyCVFile from '../assets/TomONeillCV.pdf';


export default function Contact () {

    return (
  <div className="h-[32rem] flex justify-center items-center bg-homeGreen">
    <div className="max-w-[1000px] mx-auto p-4 w-full" >
        <h1 className="text-6xl font-bold mb-8">Contact</h1>
        <div className="sm:grid grid-cols-4  md:flex md:gap-10 ">
        <a target="_blank" href="https://www.linkedin.com/in/tomoneill98/">
            <button className="bg-green-200 border-2 p-4 rounded-full mx-10 mb-2">
        <BsLinkedin className="w-10 h-10"/>
            </button>
            <p className="text-center mb-4">LinkedIn</p>
        </a>

             <a target="_blank" href="https://github.com/Tomoneill98">
            <button className="bg-green-200 border-2 p-4 rounded-full mx-10 mb-2">
              <BsGithub className="w-10 h-10" />
            </button>
            <p className="text-center mb-4">GitHub</p>
          </a>

          <a target="_blank" href={MyCVFile} download>
            <button className="bg-green-200 border-2 p-4 rounded-full mx-10 mb-2">
              <BsFileEarmarkText className="w-10 h-10" />
            </button>
            <p className="text-center mb-4">CV</p>
          </a>

          <a target="_blank" href="mailto:oneillt98@gmail.com">
            <button className="bg-green-200 border-2 p-4 rounded-full mx-10 mb-2">
              <BsEnvelope className="w-10 h-10" />
            </button>
            <p className="text-center mb-4">oneillt98@gmail.com</p>
          </a>

          <a href="tel:+447909451988">
            <button className="bg-green-200 border-2 p-4 rounded-full mx-10 mb-2">
              <BsTelephone className="w-10 h-10" />
            </button>
            <p className="text-center mb-4">+44 7909 451 988</p>
          </a>
          
        </div>
         <footer className="text-center">
          <p>&copy; {new Date().getFullYear()} Tom O'Neill.</p>
        </footer>
      </div>
    </div>

  );
     
    
}