import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className=" w-full my-24">
      <div className=" w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className=" max-w-[1240px] mx-auto px-4 py-16">
        <div className=" text-center py-16 text-slate-300">
          <h2 className=" text-4xl  ">PRICING</h2>
          <h1 className=" text-6xl font-bold text-white py-10">
            The right price for your research.
          </h1>
          <p className=" text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            suscipit id obcaecati accusantium, odio doloribus voluptatem cum
            excepturi, deserunt vitae nemo ipsa fugit ad aperiam?
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 gap-8">
          <div className=" bg-white border-gray-300 rounded-lg shadow-xl px-8">
            <div className=" pt-8 pb-4">
              <span className=" bg-indigo-300 rounded-2xl px-3 py-1">
                STANDARD
              </span>
              <div className=" font-bold flex items-baseline py-6">
                <h1 className=" text-6xl">$49</h1>
                <p className="">/mo</p>
              </div>
              <p className=" text-2xl py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                at in tempore.
              </p>
            </div>
            <div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor sit.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor sit.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor.</p>
              </div>
            </div>
            <button className=" bg-slate-900 text-white text-2xl p-4 w-full mt-4 mb-14">
              Get Started
            </button>
          </div>
          <div className=" bg-white border-slate-300 rounded-lg shadow-xl px-8">
            <div className=" pt-8 pb-4">
              <span className=" bg-indigo-300 rounded-2xl px-3 py-1">
                STANDARD
              </span>
              <div className=" font-bold flex items-baseline py-6">
                <h1 className=" text-6xl">$89</h1>
                <p className="">/mo</p>
              </div>
              <p className=" text-2xl py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                at in tempore.
              </p>
            </div>
            <div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor sit.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor sit.</p>
              </div>
              <div className=" flex">
                <CheckIcon className=" text-green-500 w-8 mr-4" />
                <p className=" text-2xl py-4">Lorem ipsum dolor.</p>
              </div>
            </div>
            <button className=" bg-slate-900 text-white text-2xl p-4 w-full mt-4 mb-14">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
