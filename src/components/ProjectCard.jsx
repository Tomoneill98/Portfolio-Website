import React from "react";


export const ProjectCard = ({ title, description, github, demo, img }) => {
    return (
        <li className="mx-4 relative list-none md:ml-16 2xl:ml-0 md:w-[400px] md:h-auto lg:w-[500px] lg:h-auto overflow-hidden " style={{ maxWidth: "600px", borderRadius: "20px", }}>
            <img src={img} className="w-full h-auto object-cover max-h-[300px]" alt={title}  />

            <div className="absolute inset-0 flex flex-col rounded-2xl justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-pink-200  dark:bg-darkPurple dark:border-4 dark:border-white">

                <h2 className="text-md md:text-xl font-semibold font-mono mb-2 sm:mb-0 -mt-8">{title}</h2>
                <p className=" text-xs md:text-md font-mono text-justify md:px-8 mx-4 lg:m-4" >{description}</p>
                
                <div className="absolute left-0 right-0 bottom-0 flex justify-center mt-1 md:mt-4">

                    <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
                   </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-2 py-1 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button></a>
                </div>
            </div>
        </li>
    );
};


