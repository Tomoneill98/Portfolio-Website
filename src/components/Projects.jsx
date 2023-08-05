import React from "react";
import LoveBirds from '../assets/lovebirds.png'

export default function Projects() {

    return (
        <div id="projects" className="bg-projectsYellow w-full md:h-screen">
            {/*container */}
        <div className="h-screen w-full mx-auto flex flex-col justify-center">
        {/*title*/}
            <div className="pb-8">
            <h1 className="text-6xl font-bold py-2 text-center">Projects</h1>
            <p className="py-4 text-lg text-center">// Check out some of my recent work</p>
            </div>

        {/*project cards*/}
        <div className="flex flex-row justify-center">

            {/* Grid item */}
           
                <div className="rounded-lg overflow-hidden shadow-2xl p-6 mx-2">
                <img className= "w-96 mx-auto pb-4" src={LoveBirds} alt="Love Birds"/>
                <div className="max-w-[500px]">
                    <span className="font-bold text-2xl">
                    Love Birds
                    </span>
                    <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ab illo, nulla officiis perspiciatis inventore, excepturi laborum beatae asperiores cumque ullam. Sunt, ea? Soluta, assumenda veniam eaque corrupti quidem ut.</p>
                    <div className="flex gap-5 justify-center mt-6">
                    <a target="_blank" href="https://northcoders.com/projects/june-2023/love-birds">
                <button className="mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/Tomoneill98/Final-Project-Love-Birds-App">
                <button className="mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Code</button>
                    </a>
                    </div>
                </div>
                </div>

                      <div className="rounded-lg overflow-hidden shadow-2xl p-6 mx-2">
                <img className= "w-96 mx-auto pb-4" src={LoveBirds} alt="Love Birds"/>
                <div className="max-w-[500px]">
                    <span className="font-bold text-2xl">
                    Love Birds
                    </span>
                    <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ab illo, nulla officiis perspiciatis inventore, excepturi laborum beatae asperiores cumque ullam. Sunt, ea? Soluta, assumenda veniam eaque corrupti quidem ut.</p>
                    <div className="flex gap-5 justify-center mt-6">
                    <a target="_blank" href="https://northcoders.com/projects/june-2023/love-birds">
                <button className="mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/Tomoneill98/Final-Project-Love-Birds-App">
                <button className="mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Code</button>
                    </a>
                    </div>
                </div>
                </div>

                      <div className="rounded-lg overflow-hidden shadow-2xl p-6 mx-2">
                <img className= "w-96 mx-auto pb-4" src={LoveBirds} alt="Love Birds"/>
                <div className="max-w-[500px]">
                    <span className="font-bold text-2xl">
                    Love Birds
                    </span>
                    <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ab illo, nulla officiis perspiciatis inventore, excepturi laborum beatae asperiores cumque ullam. Sunt, ea? Soluta, assumenda veniam eaque corrupti quidem ut.</p>
                    <div className="flex gap-5 justify-center mt-6">
                    <a target="_blank" href="https://northcoders.com/projects/june-2023/love-birds">
                <button className="mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Demo</button>
                    </a>
                    <a target="_blank" href="https://github.com/Tomoneill98/Final-Project-Love-Birds-App">
                <button className="mt-8 border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Code</button>
                    </a>
                    </div>
                </div>
                </div>

                
           
        </div>
        </div>

        </div>
     
    )
}