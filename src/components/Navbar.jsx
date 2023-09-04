import React from "react";
//import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  function handleNav() {
    setNav((prevNav) => {
      return !prevNav;
    });
  }

  const handleClose = () => {
    setNav((prevNav) => {
      return !prevNav;
    });
  };

  return (
    <div className=" w-full   bg-zinc-200 z-10 fixed drop-shadow-lg">
      <div className=" max-w-[1040px] p-4 h-[80px] mx-auto ">
        <div className=" flex items-center h-full w-full justify-between">
          <h1 className=" font-bold text-4xl mr-4 ">Brand.</h1>
          <ul className=" hidden md:flex gap-8 text-l lg:text-xl font-normal">
            <li>
              <Link to="home" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-80} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-85} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-90} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex">
            <button className=" border-none bg-transparent hover:scale-110 duration-300 text-black mr-4">
              Sign In
            </button>
            <button className="px-4 py-2 hover:scale-105 duration-300">
              Sign Up
            </button>
          </div>
          {!nav ? (
            <HiMenu className=" flex md:hidden w-6 h-8" onClick={handleNav} />
          ) : (
            <HiX className=" flex md:hidden w-6 h-8" onClick={handleNav} />
          )}
        </div>
      </div>
      <div className={!nav ? "hidden" : "flex md:hidden "}>
        <ul className=" absolute w-full px-8 text-l lg:text-xl font-normal bg-zinc-200">
          <li className=" p-4 border-b-2 border-zinc-300">
            <Link
              onClick={handleClose}
              to="home"
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className=" p-4 border-b-2 border-zinc-300">
            <Link
              onClick={handleClose}
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className=" p-4 border-b-2 border-zinc-300">
            <Link
              onClick={handleClose}
              to="support"
              smooth={true}
              offset={-85}
              duration={500}
            >
              Support
            </Link>
          </li>
          <li className=" p-4 border-b-2 border-zinc-300">
            <Link
              onClick={handleClose}
              to="platforms"
              smooth={true}
              offset={-90}
              duration={500}
            >
              Platforms
            </Link>
          </li>
          <li className=" p-4 border-b-2 border-zinc-300">
            <Link
              onClick={handleClose}
              to="pricing"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Pricing
            </Link>
          </li>

          <div className="flex flex-col w-full">
            <button
              onClick={handleClose}
              className=" px-4 py-2 my-3 bg-transparent text-indigo-600"
            >
              Sign In
            </button>
            <button onClick={handleClose} className=" px-4 py-2">
              Sign up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
