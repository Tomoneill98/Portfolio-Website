import React from "react";
import LoveBirds from '../assets/lovebirds.png'

export default function Projects() {

    return (
        <div id="projects" className="bg-projectsYellow w-full md:h-screen">
            {/*container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/*title*/}
            <div className="pb-8">
            <h1 className="text-6xl font-bold py-2">Projects</h1>
            <p className="text-lg">// Check out some of my recent work</p>
            </div>

        {/*projects*/}
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div className="shadow-xl hover:scale-110 rounded-lg p-3">
        <img className= "w-80 mx-auto mb-4" src={LoveBirds} alt="Love Birds"/>
        <h1 className="font-bold text-2xl mb-3">Love Birds</h1>
        <p className="text-justify text-sm">This mobile app is the outcome of our team's collaboration during a Full-Stack Bootcamp. The front-end has been built with TypeScript, React Native, and Tailwind, while the back-end is supported by Google Firebase. This project showcase our newly acquired skills in developing a modern mobile application.</p>

         <div className="flex gap-1 justify-center mt-3">
                    <a target="_blank" href="https://northcoders.com/projects/june-2023/love-birds">
                        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/Tomoneill98/Final-Project-Love-Birds-App">
               
                <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button>
                    </a>
                    </div>
        </div>

         <div className="shadow-xl hover:scale-110 rounded-lg p-3">
        <img className= "w-80 mx-auto mb-4" src={LoveBirds} alt="Love Birds"/>
        <h1 className="font-bold text-2xl mb-3">NC News Website</h1>
        <p className="text-justify text-sm"> NC News is an interactive C.R.U.D web app for article reviews. Companion to the NC News backend API.</p>

         <div className="flex gap-1 justify-center mt-3">
                    <a target="_blank" href="https://northcoders.com/projects/june-2023/love-birds">
                        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/Tomoneill98/Final-Project-Love-Birds-App">
               
                <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button>
                    </a>
                    </div>
        </div>

         <div className="shadow-xl hover:scale-110 rounded-lg p-3">
        <img className= "w-80 mx-auto mb-4" src={LoveBirds} alt="Love Birds"/>
        <h1 className="font-bold text-2xl mb-3">NC News Backend API</h1>
        <p className="text-justify text-sm"> The Games Review API provides a scalable and reliable platform for managing game reviews, making it an integral part of the House of Games website's backend infrastructure.</p>

         <div className="flex gap-1 justify-center mt-3">
                    <a target="_blank" href="https://northcoders-news-fsce.onrender.com/api/articles">
                        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/Tomoneill98/Backend-Project-NC-News">
               
                <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button>
                    </a>
                    </div>
        </div>

        </div> 
        </div>
        </div>
    )
}