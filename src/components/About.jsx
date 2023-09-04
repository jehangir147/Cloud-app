import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full max-w-[1240px] px-4 py-16 mx-auto bg-white "
    >
      <div className="w-full flex flex-col px-12 text-center">
        <h2 className=" text-5xl font-bold my-6">
          Trusted by the developer across the world
        </h2>
        <p className=" text-2xl text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          optio numquam. Quibusdam quae reiciendis cum inventore, facere labore
          iure iusto!
        </p>
        <div className="grid md:grid-cols-3 gap-2 my-8">
          <div className="  border drop-shadow-lg rounded-lg py-8">
            <h1 className=" text-6xl font-bold text-indigo-500">100%</h1>
            <p className=" py-2 font-medium text-slate-500">Compeletion</p>
          </div>
          <div className="  border drop-shadow-lg rounded-lg py-8">
            <h1 className=" text-6xl font-bold text-indigo-500">24/7</h1>
            <p className=" py-2 font-medium text-slate-500">Delivery</p>
          </div>
          <div className="  border drop-shadow-lg rounded-lg py-8">
            <h1 className=" text-6xl font-bold text-indigo-500">100K</h1>
            <p className=" py-2 font-medium text-slate-500">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
