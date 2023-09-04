import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full bg-slate-900 ">
      <div className=" py-20 max-w-[1240px] h-full mx-auto px-4">
        <div className="text-slate-300 grid md:grid-cols-6 md:gap-x-4 gap-y-8 lg:gap-x-6">
          <div className="grid col-span-4 grid-cols-2 md:grid-cols-4 ">
            <div>
              <h5 className=" font-bold text-l">SOLUTONS</h5>
              <div className=" pl-4 ">
                <p className="pt-3">Marketing</p>
                <p className=" pt-3">Analytics</p>
                <p className=" pt-3">Commerce</p>
                <p className=" pt-3">Data</p>
                <p className=" pt-3">Cloud</p>
              </div>
            </div>
            <div>
              <h5 className=" font-bold text-l">SUPPORT</h5>
              <div className=" pl-4 ">
                <p className="pt-3">Pricing</p>
                <p className=" pt-3">Documentation</p>
                <p className=" pt-3">Guides</p>
                <p className=" pt-3">API status</p>
              </div>
            </div>
            <div>
              <h5 className=" font-bold text-l">COMPANY</h5>
              <div className=" pl-4 ">
                <p className="pt-3">About</p>
                <p className=" pt-3">Blog</p>
                <p className=" pt-3">Jobs</p>
                <p className=" pt-3">Press</p>
                <p className=" pt-3">Partners</p>
              </div>
            </div>
            <div>
              <h5 className=" font-bold text-l">LEGAL</h5>
              <div className=" pl-4 ">
                <p className="pt-3">Claims</p>
                <p className=" pt-3">Private</p>
                <p className=" pt-3">Policies</p>
                <p className=" pt-3">Terms</p>
              </div>
            </div>
          </div>
          <div className=" grid col-span-2 text-center md:text-start">
            <div>
              <h5 className=" font-bold text-l">SUBSCRIBE TO OUR NEWSLETTER</h5>
              <p className="py-4">
                The latest news, articles and resources sent to your inbox
                weekly.
              </p>
              <div className=" flex h-[50px]">
                <input
                  type="text"
                  className=" w-full mr-2 rounded-lg"
                  placeholder="Enter your email"
                />
                <button className=" px-4">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr className=" bg-slate-500 my-8" />

        <div className=" text-slate-600 flex flex-col  sm:flex-row  justify-between items-center">
          <p> @2022 Workflow, LLC. All rights reserved.</p>
          <div className="flex justify-between w-[300px] pt-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
