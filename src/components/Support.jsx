import React from "react";
import support from "../assets/support.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px]  bg-gray-800 absolute">
        <img
          className=" w-full h-full mix-blend-overlay"
          src={support}
          alt=""
        />
      </div>
      <div className=" relative max-w-[1240px] mx-auto px-4 py-16 text-white text-center">
        <h3 className=" text-3xl py-4 text-slate-300">SUPPORT</h3>
        <h2 className=" font-bold text-6xl py-4">Finding The Right Team</h2>
        <h4 className=" text-3xl py-4 text-slate-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, iure
          at! Voluptatibus commodi necessitatibus esse sint iure fuga porro
          deserunt, explicabo ipsa maiores ratione consectetur, aperiam
          quibusdam mollitia sed. Labore.
        </h4>
      </div>
      <div className=" grid lg:grid-cols-3 relative gap-10 lg:gap-0">
        <div className=" mx-8 border rounded-lg shadow-md bg-white">
          <div className="px-8">
            <PhoneIcon className=" text-white font-bold bg-indigo-500 rounded-lg p-4 w-16 mb-8 mt-[-30px]" />
            <h4 className=" text-2xl font-bold mb-4">Sales</h4>
            <p className=" text-slate-500 font-medium text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              cum quis a numquam dolor consequatur unde natus, nemo nulla
              voluptatem?
            </p>
          </div>
          <div className=" flex w-full text-indigo-500 mt-4 px-8 py-4 bg-slate-300 rounded-b-lg">
            <p className=" mr-8 font-bold text-lg">Contact Us</p>
            <ArrowSmRightIcon className=" w-8" />
          </div>
        </div>
        <div className=" mx-8 border rounded-lg shadow-md bg-white">
          <div className="px-8">
            <SupportIcon className=" text-white font-bold bg-indigo-500 rounded-lg p-4 w-16 mb-8 mt-[-30px]" />
            <h4 className=" text-2xl font-bold mb-4">Technical Support</h4>
            <p className=" text-slate-500 font-medium text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              cum quis a numquam dolor consequatur unde natus, nemo nulla
              voluptatem?
            </p>
          </div>
          <div className=" flex w-full text-indigo-500 mt-4 px-8 py-4 bg-slate-300 rounded-b-lg">
            <p className=" mr-8 font-bold text-lg">Contact Us</p>
            <ArrowSmRightIcon className=" w-8" />
          </div>
        </div>
        <div className=" mx-8 border rounded-lg shadow-md bg-white">
          <div className="px-8">
            <ChipIcon className=" text-white font-bold bg-indigo-500 rounded-lg p-4 w-16 mb-8 mt-[-30px]" />
            <h4 className=" text-2xl font-bold mb-4">Media Inquiries</h4>
            <p className=" text-slate-500 font-medium text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              cum quis a numquam dolor consequatur unde natus, nemo nulla
              voluptatem?
            </p>
          </div>
          <div className=" flex w-full text-indigo-500 mt-4 px-8 py-4 bg-slate-300 rounded-b-lg">
            <p className=" mr-8 font-bold text-lg">Contact Us</p>
            <ArrowSmRightIcon className=" w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
