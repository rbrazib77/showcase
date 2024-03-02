import React from "react";
import experience from "../../assets/images/experience/experience1.png";

const index = () => {
  return (
    <section className="bg-[#191919] py-[174px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[815px] text-red-600">
            <picture>
              <img src={experience} alt="" />
            </picture>
          </div>
          <div className="w-[623px] pt-14">
            <h2 className="font-artusiG font-medium italic  text-[80px] leading-[180%] text-white">
              Experience
            </h2>
            <p className=" font-artusi w-[623px] pr-48 text-xl leading-[141%] text-[#E0DBCE] pb-14">
              <span className="italic">
                The future of fashion is experiential.
              </span>{" "}
              No longer do e-commerce product images have to be static and 2D.
              Showcase X creates animated 3D models in bespoke AR displays with
              interactive touchpoints, layered over real life, for consumers to
              immerse in and enjoy.
            </p>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              AR display
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              AR display
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Real time Customization
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
