import React from "react";
import partner from "../../assets/images/partner/partner.png";
function index() {
  return (
    <section className="bg-black pb-[70px]">
      <div className="cus-container">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium leading-[120%] pb-6 text-center text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl ">
          Partners
        </h2>
        <p className="text-[#C0C0C0] text-center px-[10px] md:px-[130px] lg:px-[130px] xl:px-[130px] 2xl:px-[130px] font-medium font-helvetica pb-10 md:pb-20 lg:pb-20 xl:pb-20 2xl:pb-20  text-2xl w-[400px]  md:w-[1075px] lg:w-[1075px] xl:w-[1075px] 2xl:w-[1075px] leading-[141%]  relative left-[50%] translate-x-[-50%]">
          Showcase X partners with leading institutions and organisations in the
          fashion industry.
        </p>
        <div className="md:w-[1296px] lg:w-[1296px] xl:w-[1296px] 2xl:w-[1296px] relative left-[50%] translate-x-[-50%]">
          <picture>
            <img src={partner} alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default index;
