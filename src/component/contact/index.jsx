import React from "react";
import mask from "../../assets/images/mask.png";
import { NavLink } from "react-router-dom";

export default function Contact(props) {
  return (
    <>
      <section
        className={`overlay ${props.bg == "white" ? "bg-white" : "bg-footer"} `}
      >
        <div
          className="py-6 md:py-10 lg:py-10  xl:py-10 2xl::py-10 md:pb-20 lg:pb-20 xl:pb-20 2xl:pb-20"
          style={{
            background: `url(${mask}) no-repeat center center`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className=" px-4 xl:px-14 2xl:px-14 sm:px-0">
            <div className="shape flex justify-between pb-4 md:pb-10 lg:pb-10 xl:pb-10 2xl:pb-10">
              <span className="w-10 md:w-14 lg:w-14 xl:w-14 2xl:w-14 h-10 md:h-14 lg:h-14 xl:h-14 2xl:h-14 rounded-br-full bg-highlight block"></span>
              <span className="w-10 md:w-14 lg:w-14 xl:w-14 2xl:w-14 h-10 md:h-14 lg:h-14 xl:h-14 2xl:h-14 rounded-tl-full bg-highlight block"></span>
            </div>
            <div className="flex items-center">
              <div className="md:w-1/2">
                <h6 className="font-medium font-helvetica pl-5  text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl  md:text-left lg:text-left xl:text-left 2xl:text-left md:text-[72px] lg:text-[86px] xl:text-[118px] 2xl:text-[118px] text-black  md:leading-[110px] lg:leading-[138px] xl:leading-[138px] 2xl:leading-[138px]">
                  Let’s Start Your Brands <br />
                  <span className="font-artusi italic">AR</span> Journey
                </h6>
              </div>
              <div className="w-[375px] md:w-1/2 md:pt-28 lg:pt-28 xl:pt-28 2xl:pt-28 px-0 md:px-10 lg:px-10 xl:px-10 2xl:px-10 pr-5 md:pr-10 lg:pr-10 xl:pr-10 2xl:pr-10">
                <div className="btn text-center">
                  <NavLink
                    target="_blank"
                    to="https://calendly.com/charles-tc/30min"
                  >
                    <button className="font-helvetica bg-highlight w-[80%] md:w-full lg:w-full xl:w-full 2xl:w-full duration-300 ease-linear font-medium text-xs lg:text-4xl xl:text-4xl 2xl:text-4xl text-white relative py-[12px] lg:py-8 after:absolute after:bg-black after:w-0 hover:after:h-[20px] md:hover:after:h-[70px] lg:hover:after:h-[70px] xl:hover:after:h-[70px] 2xl:hover:after:h-[70px] hover:before:h-[20px] md:hover:before:h-[70px] lg:hover:before:h-[70px] xl:hover:before:h-[70px] 2xl:hover:before:h-[70px] hover:after:w-5 md:hover:after:w-11 lg:hover:after:w-11 xl:hover:after:w-11 2xl:hover:after:w-11 after:h-0 after:duration-100 after:ease-linear after:rounded-bl-[200%] after:right-0 after:top-0 before:top-0 before:absolute before:bg-black before:w-0 hover:before:w-5 md:hover:before:w-11 lg:hover:before:w-11 xl:hover:before:w-11 2xl:hover:before:w-11 before:duration-100 before:ease-linear before:h-0 before:rounded-br-[100%] before:left-0 ">
                      Book A Demo
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
