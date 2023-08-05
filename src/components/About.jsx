import React from "react";

export default function About () {

    return (
        <div id="about" className="bg-aboutPurple w-full h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
                {/*container*/}
                <div className="max-w-[1000px] w-full px-4">
             <h1 className="font-bold text-6xl inline ">About me</h1>
                <div className="md: text-justify my-8" >
                    <p className="mb-6 bg-purple-200 rounded-lg p-2 pr-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sequi, minima quam at rerum eligendi, illo nam enim omnis debitis iste modi voluptas architecto autem facere consequuntur molestiae atque impedit. </p>
                    <p className="mb-6 bg-purple-200 rounded-lg p-2 pr-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla aut nobis possimus iste quas reiciendis odio veniam eius eveniet numquam deleniti, quasi, reprehenderit minima! Atque, quae? Natus, est voluptatum! </p>
                    <p className="mb-6  bg-purple-200 rounded-lg p-2 pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla aut nobis possimus iste quas reiciendis odio veniam eius eveniet numquam deleniti, quasi, reprehenderit minima! Atque, quae? Natus, est voluptatum!</p>
                </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
     
    )
}