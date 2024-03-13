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
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    draggable: true,
  };

  return (
    <>
      <section className="heroSection bg-black relative overflow-hidden">
        <Slider {...settings}>
          <div className="w-[100dvh] h-[715px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls loop muted autoPlay width="100%" id="#myVideo">
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100dvh] h-[715px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls loop muted autoPlay width="100%" id="#myVideo">
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100dvh] h-[715px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls muted loop autoPlay width="100%" id="#myVideo">
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </Slider>
        <div className="content  absolute top-24 md:-top-10 w-full">
          <div className="absolute top-[-10px] md:top-[250px] lg:top-[250px] xl:top-[250px] 2xl:top-[250px] right-0">
          <div className="cus-container">
              <div>
              <NavLink target="_blank" to="https://twitter.com/ShowcaseX_/">
                <FaTwitter className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </NavLink>
              </div>
              <div className="my-3 md:my-7 lg:my-7 xl:my-7 2xl:my-7">
              <NavLink target="_blank" to="https://www.instagram.com/showcasex_/">
                <FaInstagram className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
                </NavLink>
              </div>
              <div>
              <NavLink target="_blank" to="https://www.linkedin.com/company/showcasex/?viewAsMember=true">
                <FaLinkedin className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
                </NavLink>
              </div>
          </div>
          </div>
          <div className="cus-container">
            <div className="md:flex justify-between">
              <div className=" md:w-3/5 lg:w-2/5">
                <div className="box inline-block md:w-[577px]  lg:w-[577px]  bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] p-2 md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl sm:p-8 backdrop-blur-sm border border-[#676767] mt-40 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%]">
                  <h4 className="font-helvetica font-medium text-3xl md:text-5xl lg:text-5xl text-white leading-[30px]">
                    The{" "}
                    <span className="font-artusi italic font-thin">
                      {" "}
                      Immersive
                    </span>{" "}
                    Product Experience{" "}
                    <span className="font-artusi italic font-thin">
                      {" "}
                      Solution
                    </span>{" "}
                  </h4>
                  <div className="pb-7 pt-3">
                    <picture className="inline-block">
                      <img src={textLogo} alt={textLogo} />
                    </picture>
                    <p className="text-2xl md:text-lg lg:text-2xl font-normal sm:pl-4 font-helvetica inline-block capitalize text-white">
                      your fashion brand today
                    </p>
                  </div>
                  <div className="btn flex gap-4">
                    <Button bg="transparent" text="Try The App" />
                    <Button text="Book A Call" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/5 lg:w-1/5  mt-5 sm:mt-0 text-right gap-4 sm:gap-0 flex md:block">
                <div className="box w-[303px] bg-gradient-to-t to-[#6767673b] via-[#74747433] from-[#ffffff22] p-2 md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl backdrop-blur-sm border border-[#67676796]   md:mt-[120%] lg:mt-[175%] text-left">
                  <h4 className="font-helvetica font-medium text-2xl text-white flex justify-between pb-2">
                    {" "}
                    Mobile app{" "}
                    <span>
                      <FaCheckCircle className="inline-block" />
                    </span>
                  </h4>
                  <p className="font-helvetica text-sm font-normal text-[#A6A2A2] ">
                    Hosted directly on our flagship <br /> app
                  </p>
                </div>
                <div className="box w-[303px] bg-gradient-to-t to-[#6767672a] via-[#74747433] from-[#ffffff22] p-6 rounded-2xl backdrop-blur-sm border border-[#67676796] md:mt-10 text-left">
                  <h4 className="font-helvetica font-medium text-2xl text-white flex justify-between pb-2">
                    {" "}
                    Web Integration{" "}
                    <span>
                      <FaCheckCircle className="inline-block" />
                    </span>
                  </h4>
                  <p className="font-helvetica text-sm font-normal text-[#A6A2A2] ">
                    Directly integrated into a brands e-commerce platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
