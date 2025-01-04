import React, { useRef } from "react";
import bg from "../../assets/images/bg.png";
import textLogo from "../../assets/images/textLogo.png";
import Button from "../button";
import { FaCheckCircle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import VideoPlayer from "react-background-video-player";
import video1 from "../../assets/video/hero/1.webm";
import video2 from "../../assets/video/hero/2.webm";
import video3 from "../../assets/video/hero/3.webm";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    draggable: true,
  };

  return (
    <>
      <section className="heroSection bg-black relative overflow-hidden">
        <Slider {...settings}>
          <div className="w-[100dvh] h-[400px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls muted loop autoPlay width="100%" id="#myVideo">
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100dvh] h-[400px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls muted loop autoPlay width="100%" id="#myVideo">
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100dvh] h-[400px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls muted loop autoPlay width="100%" id="#myVideo">
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </Slider>
        <div className="content absolute top-24 md:-top-10 w-full">
          <div className=" hidden md:block lg:block xl:block 2xl:block absolute top-[-10px] md:top-[250px] lg:top-[250px] xl:top-[250px] 2xl:top-[250px] right-0">
            <div className="cus-container">
              <div>
                <NavLink target="_blank" to="https://twitter.com/ShowcaseX_/">
                  <FaTwitter className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
                </NavLink>
              </div>
              <div className="my-3 md:my-7 lg:my-7 xl:my-7 2xl:my-7">
                <NavLink
                  target="_blank"
                  to="https://www.instagram.com/showcasex_/"
                >
                  <FaInstagram className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
                </NavLink>
              </div>
              <div>
                <NavLink
                  target="_blank"
                  to="https://www.linkedin.com/company/showcasex/?viewAsMember=true"
                >
                  <FaLinkedin className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="cus-container hidden md:block lg:block xl:block 2xl:block">
            <div className="md:flex justify-between">
              <div className=" md:w-3/5 lg:w-2/5 mt-7 sm:mt-0">
                <div className="box p-5 sm:p-0 inline-block w-[360px] md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] xl:py-9 xl:px-[100] rounded-2xl sm:p-8 backdrop-blur-sm border border-[#676767] mt-32 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%] overflow-hidden">
                  <span className="blur-shap w-96 h-96  block absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]  bg-[#cbcbcbdb] rounded-[100%]"></span>
                  <h4 className="font-helvetica font-medium text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-white leading-[56px]">
                    As{" "}
                    <span className="font-artusi italic font-thin text-[#F7381E]">
                      Featured
                    </span>{" "}
                    In Fashion{" "}
                    <span className="font-artusi italic font-thin text-[#F7381E]">
                      Tech Applied,
                    </span>
                    Launching February 2024
                  </h4>
                </div>
                <h4 className="text-3xl text-[#FFFFFF] font-medium pt-6">
                  We are backed by
                </h4>
              </div>
            </div>
          </div>
          <div className="cus-container block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <div className=" md:w-3/5 lg:w-2/5 -mt-16 ">
              <div className="box inline-block md:w-[577px] lg:w-[577px]  bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] py-[13px] sm:py-0 px-4 sm:px-0  md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl sm:p-8 backdrop-blur-sm border border-[#676767] mt-40 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%] overflow-hidden">
                <span className="blur-shap w-96 h-96  block absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]  bg-[#dcd7d7e2] rounded-[100%]"></span>
                <h4 className="font-helvetica w-[231px] md:w-0 lg:w-0 xl:w-0 2xl:w-0  tracking-[1%] font-medium text-xl md:text-5xl lg:text-5xl text-white leading-[113%] md:leading-[30px] lg:leading-[30px] xl:leading-[30px] 2xl:leading-[30px]">
                  As{" "}
                  <span className="font-artusi italic font-thin text-[#F7381E]">
                    Featured
                  </span>{" "}
                  In Fashion{" "}
                  <span className="font-artusi italic font-thin text-[#F7381E]">
                    Tech Applied,
                  </span>{" "}
                  Launching February 2024.
                </h4>
                <div className=" pb-[14px] md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 pt-3">
                  <picture className="inline-block w-[60px] md:w-0 lg:w-0 xl:w-0 2xl:w-0">
                    <img src={textLogo} alt={textLogo} />
                  </picture>
                  <p className="text-xs md:text-lg lg:text-2xl font-normal sm:pl-4 font-helvetica inline-block capitalize text-white">
                    your fashion brand today
                  </p>
                </div>
                <div className=" md:hidden lg:hidden xl:hidden 2xl:hidden btn flex gap-4">
                  <Button bg="transparent" text="Try The App" />
                  <Button text="Book A Call" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
