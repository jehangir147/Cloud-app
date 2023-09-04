import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgimg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className=" w-full md:h-screen bg-zinc-200 flex flex-col justify-between px-4"
    >
      <div className="grid  md:grid-cols-2 max-w-[1240px] m-auto ">
        <div className=" flex flex-col justify-center md:items-start mt-16 w-full px-2 py-8">
          <p className=" text-2xl">Unique Sequencing & Production</p>
          <h1 className=" py-3 text-5xl md:text-7xl font-bold ">
            Cloud Management
          </h1>
          <p className=" text-2xl">This is our Tech Brand.</p>
          <button className=" px-6 py-3 my-4 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className=" w-full h-auto" src={bgimg} alt="" />
        </div>
      </div>
      <div
        className=" flex flex-col py-8 px-2 mb-10 md:-mt-12 mx-auto md:max-w-[760px]
        bg-zinc-200 border border-slate-300
        rounded-xl text-center shadow-xl"
      >
        <p>Data Services</p>
        <div className="flex justify-between flex-wrap px-4">
          <p className="flex px-4 py-2 text-slate-500">
            <CloudUploadIcon className=" h-6 text-indigo-600" /> App Security
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <DatabaseIcon className=" h-6 text-indigo-600" /> Dashboard Design
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <ServerIcon className=" h-6 text-indigo-600" /> Cloud Data
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <PaperAirplaneIcon className=" h-6 text-indigo-600" /> Api
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
