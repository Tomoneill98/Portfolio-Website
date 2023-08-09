import React from "react";
import {Carousel} from './Carousel'


export const ProjectCard = ({ title, description, github, slides, demo, img }) => {
    return (
        <li className="flex-shrink-0 mx-4 relative list-none w-[400px] overflow-hidden" style={{ maxWidth: "600px", borderRadius: "12px" }}>
            <img src={img} />

            <div className="absolute px-6 inset-0 flex flex-col rounded-xl justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-pink-200 dark:bg-darkPurple dark:border-2 dark:border-white">
                <h2 className="text-md md:text-xl font-semibold font-mono mb-2">{title}</h2>
                <p className=" text-xs md:text-md font-mono text-justify md:px-8">{description}</p>
                <div className="mt-6 gap-10">

                    <a href={demo} target="_blank" rel="noopener noreferrer">
                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
                   </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-2 py-1 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button></a>
                </div>
            </div>
        </li>
    );
};



// export function ProjectCard ({title, description, github, slides}) {
//     return (
//     <>
//         <li className="mx-auto flex flex-row items-center justify-center rounded-3xl border border-solid border-black px-2 py-6">
//             <Carousel autoSlide={true} autoSlideInterval={1000}>
//                 {slides.map((s) => (
//                     <img src={s} />
//                 ))}
//             </Carousel>
//                 <h2 className="text-left text-2xl font-mono">{title}</h2>
//                 <p>{description}</p>

//                  {/* <div className="flex gap-1 justify-center mt-3">
//                   <a target="_blank" href="https://northcoders.com/projects/june-2023/love-birds">
//                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Demo</button>
//                </a>
//                    <a target="_blank" href="https://github.com/Tomoneill98/Final-Project-Love-Birds-App">
               
//                <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Code</button>
//                 </a>
//                     </div> */}
//         </li>
//     </>
        
//     )
// }