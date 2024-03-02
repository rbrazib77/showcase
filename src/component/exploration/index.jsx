import React from "react";
import exploration from "../../assets/images/exploration/exploration.png";

const index = () => {
  return (
    <section className="bg-[#000000] py-[174px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[623px] pt-14">
            <h2 className="font-artusiG font-medium italic text-[80px] leading-[180%] text-white">
              Exploration
            </h2>
            <p className=" font-artusi w-[627px] pr-16 text-xl leading-[141%] text-[#E0DBCE]  pb-14">
              The showcase X way of displaying products, drives consumers to
              spend more time with products, exploring brand narratives like
              never before. The heightened shopping experience results in far
              greater brand to <span className="italic">consumer connection.</span>
            </p>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              On/off Avatars
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              Direct Integration
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Simple Set Up
            </button>
          </div>
          <div className="w-[815px] text-red-600">
            <picture>
              <img src={exploration} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
