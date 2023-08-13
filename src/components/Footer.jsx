import React from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'


export default function Footer() {

function scrollTop () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

  return (
    <section className="bg-pastelYellow dark:bg-darkGrey w-screen h-fit ">
     <div className="flex justify-end mr-2">
        <button onClick={scrollTop}className="flex md:m-3 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-full dark:bg-teal-700 ">
          <AiOutlineArrowUp className="text-2xl md:text-4xl" />
        </button>
      </div>
       <div className="text-sm md:text-xl flex justify-center mb--4 font-mono dark:text-white">
        <p className="mb-4">
        © Tom O'Neill {new Date().getFullYear()}. All rights reserved.
        </p>
       </div>
     
    </section>
  );
}

