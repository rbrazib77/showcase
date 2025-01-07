import React from "react";
import engagement from "../../assets/images/engagement/engagement.png";

const index = () => {
  return (
    <section className="bg-[#000000] py-[50px] md:py-[174px] lg:py-[174px] xl:py-[174px] 2xl:py-[174px]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex justify-between items-center">
          <div className=" block md:hidden lg:hidden xl:hidden 2xl:hidden  m-auto">

     
            <picture>
              <img src={engagement} className="w-full" alt="" />
            </picture>
          </div>
          <div className="">

            <h2 className="font-artusiG font-bold italic text-2xl md:text-[80px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[100%] md:leading-[160%] lg:leading-[160%] xl:leading-[160%] 2xl:leading-[160%] text-white pb-[14px] md:pb-[49px] lg:pb-[49px] xl:pb-[49px] 2xl:pb-[49px]">
              Engagement
            </h2>
            <p className=" font-artusi w-[600px] md:w-[663px] lg:w-[663px] xl:w-[663px] 2xl:w-[663px] pr-52 md:pr-48 lg:pr-48 xl:pr-48 2xl:pr-48 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl leading-[141%] text-[#E0DBCE] pb-4 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12">
              With showcase X AR immersive displays and our suite of additional
              features, consumers can be engaged with products on a whole new
              level. Heightened engagement leads to customers becoming brand
              advocates, with a compounding effect as they share user generated
              content of their{" "}
              <span className="italic">shopping experience.</span>
            </p>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              User Generated Content
            </button>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-sm  font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              Screen Capture
            </button>
            <button className="bg-[#FFFFFF10] text-white mt-3 sm:mt-0 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3 px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Social Media Share
            </button>
          </div>
          <div className="w-[350px] hidden md:block lg:block xl:block 2xl:block md:w-[815px] lg:w-[815px] xl:w-[815px] 2xl:w-[815px] m-auto">
            <picture>
              <img src={engagement} className="w-full" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
