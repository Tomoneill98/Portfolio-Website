import React from "react";

export default function About () {

    return (
        <div id="about" className="bg-pastelPurple w-full min-h-screen dark:bg-darkGrey dark:text-white flex justify-center items-center">
         
                {/*container*/}
                <div className="max-w-[1240px] w-full px-4">
             <h1 className="font-bold text-6xl inline font-mono ">About me</h1>
                <div className="text-justify my-8 pr-10" >
                    <p className="mb-6 bg-offWhite rounded-lg p-3 md:pr-10 dark:bg-teal-700 font-mono">// I recently completed the Northcoders Software Development Bootcamp, where I gained experience in industry best practices such as Agile Methodologies, Test-Driven Development (TDD), Pair Programming, Scrum, and Kanban. I have worked with both frontend and backend tech stacks, enabling me to create robust and efficient applications.</p>
                    <p className="mb-6 bg-offWhite rounded-lg p-3 md:pr-10 dark:bg-teal-700 font-mono">// With a background in chemistry and science, I bring a unique blend of problem-solving skills to my development work. My experience in analytical thinking and logical reasoning helps me approach challenges creatively and find effective solutions. </p>
                    <p className="mb-6  bg-offWhite rounded-lg p-3 md:pr-10 dark:bg-teal-700 font-mono">// Apart from coding, I enjoy spending time with my feline friends, learning Spanish, hanging out with friends, going on hikes in the beautiful Peak District, and being a full-time Swiftie.</p>
                </div>
                </div>
                <div>
                    
                </div>
            </div>
  
     
    )
}