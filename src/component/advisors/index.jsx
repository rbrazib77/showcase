import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import advisors1 from "../../assets/images/advisors/advisors1.png";
import advisors2 from "../../assets/images/advisors/advisors2.png";
import advisors3 from "../../assets/images/advisors/advisors3.png";
import advisors4 from "../../assets/images/advisors/advisors4.png";
import advisors5 from "../../assets/images/advisors/advisors5.png";
import advisors6 from "../../assets/images/advisors/advisors6.png";
const index = () => {
  return (
    <section className="bg-black py-32 ">
      <div className="container">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium leading-[120%] pb-6 text-center text-6xl ">
          Advisors
        </h2>
        <p className="text-[#C0C0C0] text-center px-[130px] font-medium font-helvetica pb-40 text-2xl w-[1187px] leading-[141%]  relative left-[50%] translate-x-[-50%]">
          Showcase X is supported by a leading board of advisors from the
          fashion industry.
        </p>
        <div className="flex mb-24 ">
          <div className="w-[535px] relative ">
            <picture>
              <img src={advisors1} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Peter
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="w-[535px] mx-9 relative ">
            <picture>
              <img src={advisors2} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Francesco
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="w-[535px] relative">
            <picture>
              <img src={advisors3} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Michael
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[535px] relative ">
            <picture>
              <img src={advisors4} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Donald
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="w-[535px] mx-9 relative ">
            <picture>
              <img src={advisors5} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Sofia
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="w-[535px] relative">
            <picture>
              <img src={advisors6} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
              Saverrio
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
