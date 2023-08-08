import React from "react";
import {Carousel} from './Carousel'



export const ProjectCard = ({ title, description, github, slides, demo}) => {
    return (
        <li className="flex-shrink-0 w-64 mx-4">
            <Carousel autoSlide={true} autoSlideInterval={3000} slides={slides}>
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`Slide ${index}`} />
                ))}
            </Carousel>
            <h2 className="text-xl font-semibold mt-4">{title}</h2>
            <p className="text-sm">{description}</p>
            <div className="mt-2 space-x-2">
                <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">Demo</a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700">Code</a>
            </div>
        </li>
    )
}

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