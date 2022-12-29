import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import TypeScript from '../assets/typescript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';

import htmlcss from "../assets/certificate/html-css.png"
import javascript from "../assets/certificate/javascript.png";
import frontend from "../assets/certificate/frontend.png";
import react from "../assets/certificate/react.png";


const Certificate = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 ">
            Certificates
          </p>
          <p className="py-4">These are some of the certificates I have</p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={htmlcss} alt="HTML icon" />
            <p className="my-4 text-lg font-bold">HTML-CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={javascript} alt="HTML icon" />
            <p className="my-4 text-lg font-bold">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4 text-lg font-bold">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={frontend} alt="HTML icon" />
            <p className="my-4 text-lg font-bold">FRONTEND</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
