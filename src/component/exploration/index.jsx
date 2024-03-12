import React from "react";
import exploration from "../../assets/images/exploration/exploration.png";

const index = () => {
  return (
    <section className="bg-[#000000] py-[50px] md:py-[174px] lg:py-[174px] xl:py-[174px] 2xl:py-[174px]">
      <div className="">
        <div className="lg:flex xl:flex 2xl:flex items-center">
          <div className="w-[500px] md:w-[623px] lg:w-[623px] xl:w-[623px] 2xl:w-[623px] pl-[30px] md:pl-[162px] lg:pl-[162px] xl:pl-[162px] 2xl:pl-[162px] ">
            <h2 className="font-artusiG font-bold italic text-[80px] leading-[100%] md:leading-[160%] lg:leading-[160%] xl:leading-[160%] 2xl:leading-[160%] text-white pb-[30px] md:pb-[49px] lg:pb-[49px] xl:pb-[49px] 2xl:pb-[49px]">
              Exploration
            </h2>
            <p className=" font-artusi w-[600px] md:w-[627px] lg:w-[627px] xl:w-[627px] 2xl:w-[627px] pr-48 text-xl leading-[141%] text-[#E0DBCE]  pb-12">
              The showcase X way of displaying products, drives consumers to
              spend more time with products, exploring brand narratives like
              never before. The heightened shopping experience results in far
              greater brand to{" "}
              <span className="italic">consumer connection.</span>
            </p>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              On/off Avatars
            </button>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              Direct Integration
            </button>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Simple Set Up
            </button>
          </div>
          <div className="w-[350px] md:w-[815px] lg:w-[815px] xl:w-[815px] 2xl:w-[815px] m-auto ">
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
