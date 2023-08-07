import React from "react"
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import PSQL from '../assets/PSQL.png'

export default function Skills () {

    return (
        <div id='skills' className="bg-pastelYellow w-full min-h-screen dark:bg-darkBlue dark:text-white flex justify-center items-center">
            {/*container*/}
            <div className="max-w-[1000px] w-full p-4">
                <div>
                    <h1 className="text-6xl py-2 font-bold">Skills</h1>
                    <p className="py-2 text-lg"> // These are the technologies I have worked with</p>
                </div>
                {/*skills*/}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                      <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={JavaScript} alt="JavaScript icon"/>
                    <p className="my-3">JavaScript</p>
                </div>
                <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={ReactImg} alt="JavaScript icon"/>
                    <p className="my-3">React</p>
                </div>
                 <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={HTML} alt="JavaScript icon"/>
                    <p className="my-3">HTML</p>
                </div>
                 <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={CSS} alt="JavaScript icon"/>
                    <p className="my-3">CSS</p>
                </div>
                 <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={Tailwind} alt="JavaScript icon"/>
                    <p className="my-3">Tailwind</p>
                </div>
                 <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={Node} alt="JavaScript icon"/>
                    <p className="my-3">Node</p>
                </div>
                 <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={GitHub} alt="JavaScript icon"/>
                    <p className="my-3">GitHub</p>
                </div>
                 <div className="shadow-xl hover:scale-110 rounded-lg">
                    <img className= "w-20 mx-auto"src={PSQL} alt="JavaScript icon"/>
                    <p className="my-3">PostgreSQL</p>
                </div>
                </div>
            </div>
        </div>
    )
}