import React from "react";
import experience from "../../assets/images/experience/experience1.png";

const index = () => {
  return (
    <section className="bg-[#191919] py-[50px] md:py-[174px] lg:py-[174px] xl:py-[174px] 2xl:py-[174px]">
      <div className="md:px-[160px] lg:px-[160px] xl:px-[160px] 2xl:px-[160px]">
        <div className="lg:flex xl:flex 2xl:flex items-center">
          <div className="w-[350px] md:w-[623px] lg:w-[623px] xl:w-[623px] 2xl:w-[623px] m-auto">
            <picture>
              <img src={experience} className="w-full" alt="" />
            </picture>
          </div>
          <div className="w-[500px] md:w-[623px] lg:w-[623px] xl:w-[623px] 2xl:w-[623px] pl-[30px] md:pl-[162px] lg:pl-[162px] xl:pl-[162px] 2xl:pl-[162px]">
            <h2 className="font-artusiG font-bold italic text-2xl md:text-[80px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[100%] md:leading-[160%] lg:leading-[160%] xl:leading-[160%] 2xl:leading-[160%] text-white pb-[14px] md:pb-[49px] lg:pb-[49px] xl:pb-[49px] 2xl:pb-[49px]">
              Experience
            </h2>
            <p className=" font-artusi w-[365px] md:w-[623px] lg:w-[623px] xl:w-[623px] 2xl:w-[623px]  md:pr-48 lg:pr-48 xl:pr-48 2xl:pr-48 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl leading-[141%] text-[#E0DBCE] pb-4 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12">
              <span className="italic">
                The future of fashion is experiential.
              </span>{" "}
              No longer do e-commerce product images have to be static and 2D.
              Showcase X creates animated 3D models in bespoke AR displays with
              interactive touchpoints, layered over real life, for consumers to
              immerse in and enjoy.
            </p>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6  py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              AR display
            </button>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              AR display
            </button>
            <button className="bg-[#FFFFFF10] text-white px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Real time Customization
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
