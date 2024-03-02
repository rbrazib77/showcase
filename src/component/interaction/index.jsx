import React from "react";
import interaction from "../../assets/images/interaction/interaction.png";

const index = () => {
  return (
    <section className="bg-[#191919] py-[174px]">
      <div className="px-[160px]">
        <div className="flex items-center">
          <div className="w-[815px">
            <picture>
              <img src={interaction} className="w-full" alt="" />
            </picture>
          </div>
          <div className="w-[623px] pl-[110px] ">
            <h2 className="font-artusiG font-bold italic text-[80px] leading-[160%] text-white pb-[49px]">
              Interaction
            </h2>
            <p className="font-artusi w-[623px] pr-52  text-xl leading-[141%] text-[#E0DBCE] pb-14">
              With showcase X it is now possible for consumers to engage with a
              particular product as if it was right there with them, wherever
              they may be in the world, considering different aspects of a
              product, re-sizing, exploring color ways and{" "}
              <span className="italic">even trying it on.</span>
            </p>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Dynamic Interaction
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-3">
              Real time colorways
            </button>
            <button className="bg-[#FFFFFF10] text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
              Data Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
