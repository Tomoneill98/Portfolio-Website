import React from "react";
import { projectData } from "../data/projectData";
import {ProjectCard} from './ProjectCard';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


export default function Projects() {

 const carousel = {
      arrows: true,
      infinite: true,
      speed: 500, 
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000, 
      cssEase: 'linear',
      dots: true,
    };

    return (
        <section id="projects" className="bg-pastelPink w-full min-h-screen dark:bg-darkPurple dark:text-white flex justify-center items-center">
            <div className="max-w-[1240px] w-full p-4">
              
                <div className="mb-4 lg:mb-8">
                <h1 className="text-6xl font-bold font-mono">Projects</h1>
                  <p className="py-2 text-sm md:text-lg font-mono"> // Here's what I have been working on recently.</p>
                </div>
       
          {/*Carousel*/}
             <Slider {...carousel} className="mx-5 xl:mx-0">
            {projectData.map((project) => (
            <div key={project.title}>
              <ProjectCard
                title={project.title}
                img={project.img}
                description={project.description}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </Slider>
        
            </div>
        </section>
    )
}

