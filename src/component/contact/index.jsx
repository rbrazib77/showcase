import React from "react";
import mask from "../../assets/images/mask.png";

export default function Contact(props) {
  return (
    <>
      <section
        className={`overlay ${props.bg == "white" ? "bg-white" : "bg-footer"} `}
      >
        <div
          className="py-10 pb-20"
          style={{
            background: `url(${mask}) no-repeat center center`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="xl:px-14 2xl:px-14 sm:px-0">
            <div className="shape flex justify-between pb-10">
              <span className="w-14 h-14 rounded-br-full bg-highlight block"></span>
              <span className="w-14 h-14 rounded-tl-full bg-highlight block"></span>
            </div>
            <div className="md:flex">
              <div className="md:w-1/2">
                <h6 className="font-medium font-helvetica text-center text-4xl md:text-left lg:text-left xl:text-left 2xl:text-left md:text-[72px] lg:text-[86px] xl:text-[118px] 2xl:text-[118px] text-black md:leading-[110px] lg:leading-[138px]">
                  Let’s Start Your Brands <br />
                  <span className="font-artusi italic">AR</span> Journey
                </h6>
              </div>
              <div className="md:w-1/2 pt-8 md:pt-28 lg:pt-28 xl:pt-28 2xl:pt-28 px-10 md:pr-10 lg:pr-10 xl:pr-10 2xl:pr-10">
                <div className="btn text-center">
                  <button className="font-helvetica bg-highlight w-full duration-300 ease-linear font-medium text-2xl lg:text-4xl  text-white relative py-4 lg:py-8 after:absolute after:bg-black after:w-0 hover:after:h-[45px] md:hover:after:h-[70px] lg:hover:after:h-[70px] xl:hover:after:h-[70px] 2xl:hover:after:h-[70px] hover:before:h-[45px] md:hover:before:h-[70px] lg:hover:before:h-[70px] xl:hover:before:h-[70px] 2xl:hover:before:h-[70px] hover:after:w-8 md:hover:after:w-11 lg:hover:after:w-11 xl:hover:after:w-11 2xl:hover:after:w-11 after:h-0 after:duration-100 after:ease-linear after:rounded-bl-[200%] after:right-0 after:top-0 before:top-0 before:absolute before:bg-black before:w-0 hover:before:w-8 md:hover:before:w-11 lg:hover:before:w-11 xl:hover:before:w-11 2xl:hover:before:w-11 before:duration-100 before:ease-linear before:h-0 before:rounded-br-[100%] before:left-0 ">
                    Book A Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
