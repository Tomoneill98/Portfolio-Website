import React from "react";

export default function Home () {

    return (
        <div id='home' className="w-full h-screen bg-homeGreen dark:bg-darkPurple2 dark:text-white">

            {/* heading container */ }
            <div className="max-w-[1000px] mx-auto p-20 border-solid flex flex-col justify-center h-screen">
            <h1 className="text-4xl sm:text-7xl pb-5 font-bold">Hi, I'm Tom!</h1>
            <p className="text-4xl pt-4 max-w-[1000px] text-justify leading-10">// I'm a Software Developer based in Manchester, UK. Here is my portfolio page to show you what i've been working on recently!</p>
            <div>
            <button className=" mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">View Work</button>
            </div>
            </div>

        </div>
    )
}