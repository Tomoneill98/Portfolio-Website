import React from "react";
import Typewriter from 'typewriter-effect';
import Comp from '../assets/retrocomp.png'

export default function Home() {
    return (
        <div id='home' className="w-full h-screen bg-homeGreen dark:bg-darkPurple2 dark:text-white flex">
            {/* Image Container */}
            <div className="w-40% p-8 bg-white flex justify-center items-center dark:bg-darkGrey">
                {/* Place your image here */}
                <img className="w-80 justify-center items-center" src={Comp} alt="Image" />
            </div>

            {/* Heading and Text Container */}
            <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl pb-5 font-bold font-mono">Hi, I'm Tom</h1>
                <h2 className="text-3xl sm:text-4xl md:text-6xl pb-5 font-bold font-mono">Full Stack Software Developer</h2>

                <div className="text-xl pt-4 text-start max-w-[1000px] md:text-justify md:text-2xl leading-10 font-mono">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(20)
                                .pauseFor(500)
                                .typeString("Welcome to my portfolio...")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Scroll down to check out the projects I've been working on.")
                                .start();
                        }}
                    />
                </div>
                {/* <div>
                    <button className=" mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">View Work</button>
                </div> */}
            </div>
        </div>
    );
}
