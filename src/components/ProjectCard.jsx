import React from "react";

export const ProjectCard = ({ title, description, github, demo, img }) => {
  return (
    <div className="flex flex-wrap">
      {/* Left Column */}
      <div className="w-full md:w-1/2 pr-10">
        <h1 className="text-md md:text-xl font-semibold font-mono mb-4">{title}</h1>
        <p className="md:text-md font-mono text-justify mb-6">{description}</p>
        <div className="flex justify-center">
      {/* Buttons */}
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs md:text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
        </a>

        <a href={github} target="_blank" rel="noopener noreferrer">
          <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xs md:text-sm px-2 py-1 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button>
        </a>

        </div>

      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
};
