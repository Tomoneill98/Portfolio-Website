import React from "react";

export const ProjectCard = ({ title, description, github, demo, img }) => {
  return (
    <div className="flex flex-wrap">
      {/* Left Column */}
      <div className="w-full md:w-1/2 pr-10">
        <h1 className="text-md md:text-xl font-semibold font-mono mb-6">{title}</h1>
        <p className="text-s md:text-md font-mono text-justify mb-6">{description}</p>
        <div className="flex justify-center">
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

//         <li className="mx-4 relative list-none md:ml-16 2xl:ml-0 md:h-auto lg:w-[500px] lg:h-auto overflow-hidden " style={{ maxWidth: "600px", borderRadius: "20px", }}>
//             <img src={img} className="w-full h-auto object-cover max-h-[300px]" alt={title}  />

//             <div className="absolute inset-0 flex flex-col rounded-2xl justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-pink-200  dark:bg-darkPurple dark:border-4 dark:border-white">

//                 <h2 className="text-sm md:text-xl font-semibold font-mono -mt-10">{title}</h2>
//                 <p className=" text-xs lg:text-sm font-mono sm:text-justify leading-none md:leading-normal px-1 sm:px-6 lg:m-4 tracking-tighter sm:tracking-normal" >{description}</p>
                
//               <div className="absolute left-0 right-0 bottom-0 flex justify-center md:mt-4">


    
// </div>

//             </div>
//         </li>

