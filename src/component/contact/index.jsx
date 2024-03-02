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
                <h6 className="font-medium font-helvetica text-4xl md:text-[72px] lg:text-[86px] xl:text-[118px] text-black md:leading-[110px] lg:leading-[138px]">
                  Let’s Start Your Brands <br />
                  <span className="font-artusi italic">AR</span> Journey
                </h6>
              </div>
              <div className="md:w-1/2 pt-28 pr-10">
                <div className="btn text-center">
                <button className='font-helvetica bg-highlight w-full duration-300 ease-linear font-medium text-2xl lg:text-4xl  text-white relative py-4 lg:py-8 after:absolute after:bg-black after:w-0 hover:after:h-2/3 hover:before:h-2/3 hover:after:w-10 after:h-0 after:duration-100 after:ease-linear after:rounded-bl-[200%] after:right-0 after:top-0 before:top-0 before:absolute before:bg-black before:w-0 hover:before:w-10 before:duration-100 before:ease-linear before:h-0 before:rounded-br-[100%] before:left-0 '>Book A Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


