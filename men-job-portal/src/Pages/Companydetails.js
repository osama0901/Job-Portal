import React from 'react';
import resumeSVG from '../resume.svg';
import Editor from './Editor';
import InputControl from '../components/InputControl/InputControl';

const CvBuilder = () => {
  const sections = {
    basicInfo: "BasicInfo",
    workExp: "Experience",
    projects: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  return (
    <div className="mx-auto text-center xl:px-28 flex flex-wrap justify-center items-center mt-10">
      <div className="w-full md:w-1/2">
        <h4 className="text-5xl font-bold font-sans text-black">
          <span className='text-sky-500'>A Resume</span> that stands out!
        </h4>
        <h4 className="text-5xl font-sans mb-4">
          Make your own resume. <span className='text-black'>It's free</span>
        </h4>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="max-w-xs h-auto transition duration-300 transform hover:scale-110"
          src={resumeSVG}
          alt="Resume"
        />
      </div>
      <div className="w-full mt-8">
        <p className="text-gray-800 text-2xl">Start building your resume now!</p>
      </div>
      <div className="w-full mt-8 flex justify-center">
        <div className="flex gap-4">
        <button className="bg-sky-500 text-white rounded-full p-6 hover:bg-sky-600"></button>
          <button className="bg-green-500 rounded-full p-6 hover:bg-green-600"></button>
          <button className="bg-cyan-500 text-white rounded-full p-6 hover:bg-cyan-600"></button>
          <button className="bg-slate-500 text-white rounded-full p-6 hover:bg-slate-600"></button>
          <button className="bg-amber-500 text-white rounded-full p-6 hover:bg-amber-600"></button>
        </div>
      </div>
      <div className="flex justify-end w-full mt-8">
        <button className="flex items-center justify-center bg-sky-600 text-white px-6 py-2 hover:bg-sky-900 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring focus:ring-sky-400">
          Download
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V3m2 0v6m-3-6l-4 4m0 0l-4-4m4 4h14m-14 0l4 4m-4-4l4-4" />
          </svg>
        </button>
      </div>
      <div className="mt-8 w-full">
        <Editor sections={sections} />
      </div>
    </div>
  );
};

export default CvBuilder;
