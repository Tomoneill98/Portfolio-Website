import React from "react";

export default function SkillsCard({img, title}) {

    return (
       
                      <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={img}/>
                    <p className="my-3">{title}</p>
                </div>
            
    )
}