import React from "react";
import partner from '../../assets/images/partner/partner.png'
function index() {
  return (
    <section className="bg-black pb-[70px]">
      <div className="container">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium leading-[120%] pb-6 text-center text-6xl ">
          Partners
        </h2>
        <p className="text-[#C0C0C0] text-center px-[130px] font-medium font-helvetica pb-20 text-2xl w-[1075px] leading-[141%]  relative left-[50%] translate-x-[-50%]">
          Showcase X partners with leading institutions and organisations in the
          fashion industry.
        </p>
        <div className="w-[1296px] relative left-[50%] translate-x-[-50%]">
            <picture>
                <img src={partner} alt="" />
            </picture>
        </div>

      </div>
    </section>
  );
}

export default index;
