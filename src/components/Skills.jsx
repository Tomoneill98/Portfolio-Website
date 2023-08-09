import React from "react"
import skillsList from "../data/skillsList"
import SkillsCard from "./SkillsCard"

export default function Skills () {

    return (
        <div id='skills' className="bg-pastelBlue w-full min-h-screen dark:bg-darkBlue dark:text-white flex justify-center items-center">
            {/*container*/}
            <div className="max-w-[1240px] w-full p-4">
                
                    <h1 className="text-6xl py-2 font-bold font-mono">Skills</h1>
                    <p className="py-2 text-lg font-mono"> // These are the technologies I have worked with.</p>
             
                {/*skills*/}
                  <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-mono">
                    {skillsList.map((skill) => (
                        <SkillsCard 
                        key={skill.title}
                        img={skill.img}
                        title={skill.title}
                        />
                    ))}
                  </div>
            </div>
        </div>
    )
}
