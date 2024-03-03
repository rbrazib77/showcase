import React from "react";
import engagement from "../../assets/images/engagement/engagement.png";

const index = () => {
  return (
    <section className="bg-[#000000] py-[174px]">
      <div className="px-[160px]">
        <div className="flex items-center">
          <div className="w-[623px]">
            <h2 className="font-artusiG font-bold italic text-[80px] leading-[180px] text-white">
              Engagement
            </h2>
            <p className=" font-artusi w-[663px] pr-56 text-xl leading-[141%] text-[#E0DBCE] pb-14">
              With showcase X AR immersive displays and our suite of additional
              features, consumers can be engaged with products on a whole new
              level. Heightened engagement leads to customers becoming brand
              advocates, with a compounding effect as they share user generated
              content of their{" "}
              <span className="italic">shopping experience.</span>
            </p>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              User Generated Content
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              Screen Capture
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Social Media Share
            </button>
          </div>
          <div className="w-[815px] text-red-600">
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
