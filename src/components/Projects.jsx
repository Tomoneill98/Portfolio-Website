import React from "react";
import { projectData } from "../data/projectData";
import {ProjectCard} from './ProjectCard';


export default function Projects() {
    return (
        <section id="projects" className="bg-pastelPink w-full min-h-screen dark:bg-darkPurple dark:text-white flex flex-col justify-center items-center">
            <div className="max-w-7xl mx-auto p-6">
                    <h1 className="text-6xl font-bold font-mono mb-4">Projects</h1>
                    <p className="text-sm md:text-lg font-mono mb-2 sm:mb-0">// Hover over a project to find out more!</p>

                <div className="w-full sm:mt-4">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
                        {projectData.map((project) => (
                            <ProjectCard
                                key={project.title}
                                img={project.img}
                                title={project.title}
                                description={project.description}
                                github={project.github}
                                demo={project.demo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}



   // return (
    //     <section id="projects" className="bg-pastelPink w-full min-h-screen md:h-screen">

    //         <h1 className="text-start" > Projects
    //         </h1>
    //         <ul className="mx-auto my-12 flex flex-row items-center justify-center gap-8 ">
    //     {projectData.map((project, i) => {
    //         return (
    //             <ProjectCard 
    //             key={i}
    //             slides={
    //                 project.title === "Love Birds"
    //                 ? loveBirdsSlides
    //                 : project.title === "NC News"
    //                 ? ncNewsSlides
    //                 : ncNewsBackEndSlides
    //             }
    //             title={project.title}
    //             description={project.description}
    //             github={project.github}
    //             demo={project.demo}
    //             />
    //         )
    //     })}
    //         </ul>
    //     </section>
    // )