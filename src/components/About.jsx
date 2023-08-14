import React from "react";

export default function About () {

    return (
        <div id="about" className="bg-pastelPurple w-full min-h-screen dark:bg-darkGrey dark:text-white flex justify-center items-center">
         
                {/*container*/}
                <div className=" py-6 md:py-0 max-w-[1240px] w-full px-4">
             <h1 className="font-bold text-6xl inline font-mono ">About me</h1>
                <div className="text-sm md:text-lg text-justify my-8 pr-10" >
                    <p className="mb-6 bg-offWhite rounded-lg p-3 md:pr-10 dark:bg-teal-700 font-mono">// Earlier this year I decided to make the career switch into tech. Fast forward six months, I've advanced from grasping coding fundamentals to crafting a responsive portfolio website and collaborating with a team to develop a mobile application. I'm excited to see what I will do in the coming months, as I intend to apply my problem solving skills to deliver exceptional user experiences and make a positive impact through programming.</p>
                    <p className="mb-6 bg-offWhite rounded-lg p-3 md:pr-10 dark:bg-teal-700 font-mono">// I recently completed the Northcoders Software Development Bootcamp, where I gained valuable skills in Agile Methodologies, such as: Scrum, Spiking, and Kanban. Additionally, I worked with other industry-leading practices such as Test-Driven Development (TDD), Pair Programming and Version Control. Developing with both frontend and backend tech stacks has enabled me to create robust and efficient applications.</p>
                    <p className="mb-6  bg-offWhite rounded-lg p-3 md:pr-10 dark:bg-teal-700 font-mono">// Beyond coding, I enjoy spending time with my feline friends, practising Spanish, going on hikes in the beautiful Peak District and listening to Taylor Swift! </p>
                </div>
                </div>
                <div>
                    
                </div>
            </div>
  
     
    )
}