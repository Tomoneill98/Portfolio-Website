import React from "react";
import { BsLinkedin, BsGithub, BsFileEarmarkText, BsEnvelope, BsTelephone } from "react-icons/bs";
import MyCVFile from '../assets/TomONeillCV.pdf';

export default function Contact() {
  return (
    <div id="contact" className="min-h-[32rem] flex justify-center items-center bg-pastelBlue dark:bg-darkGrey dark:text-white">
      <div className="max-w-[1000px] mx-auto p-4 w-full">
        <h1 className="text-6xl font-bold mb-8">Contact</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          <ContactLink href="https://www.linkedin.com/in/tomoneill98/" icon={<BsLinkedin className="w-8 h-8"/>} text="LinkedIn" />
          <ContactLink href="https://github.com/Tomoneill98" icon={<BsGithub className="w-8 h-8"/>} text="GitHub" />
          <ContactLink href={MyCVFile} icon={<BsFileEarmarkText className="w-8 h-8"/>} text="CV" download />
          <ContactLink href="mailto:oneillt98@gmail.com" icon={<BsEnvelope className="w-8 h-8"/>} text="oneillt98@gmail.com" />
          <ContactLink href="tel:+447909451988" icon={<BsTelephone className="w-8 h-8"/>} text="+44 7909 451 988" />
      </div>
        </div>
    </div>
  );
}

function ContactLink({ href, icon, text, download }) {
  return (
    <a target="_blank" href={href} download={download}>
      <div className="flex flex-col items-center">
      <button className="bg-white dark:bg-teal-700 border-2 p-4 rounded-full mb-2 md:p-6">
  {icon}
</button>

        <p className="text-sm text-center sm:text-center">{text}</p>
      </div>
    </a>
  );
}
