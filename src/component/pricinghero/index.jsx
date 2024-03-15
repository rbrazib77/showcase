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
          <div className="absolute hidden md:block xl:block 2xl:block lg:block top-[-10px] md:top-[250px] lg:top-[250px] xl:top-[250px] 2xl:top-[250px] right-0">
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
          <div className="cus-container">
            <div className="md:flex justify-between">
              <div className=" md:w-3/5 lg:w-2/5 md:mt-7 lg:mt-7 xl:mt-6 2xl:mt-7 sm:mt-0">
                <div className="box p-5 md:p-10 lg:p-10 xl:p-10 2xl:p-10 inline-block w-[293px] md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px] bg-gradient-to-t to-[#67676741] via-[#8e8c8ceb] from-[#8e8c8c71] xl:py-9 xl:px-[100] rounded-2xl  backdrop-blur-sm border border-[#676767] mt-32 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%] overflow-hidden">
                  <span className="blur-shap w-96 h-96  block absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]  bg-[#f0afafe2] rounded-[100%]"></span>
                  <h4 className="font-helvetica font-medium text-xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-white md:leading-[56px] lg:leading-[56px] xl:leading-[56px] 2xl:leading-[56px]">
                    An{" "}
                    <span className="font-artusi text-highlight italic font-thin">
                      {" "}
                      Affordable
                    </span>{" "}
                    Pricing{" "}
                    <span className="font-artusi text-highlight italic font-thin">
                      Structure
                    </span>
                  </h4>
                  <div className="pb-[14px] md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 md:pt-3 lg:pt-3 xl:pt-3 2xl:pt-3">
                    <picture className="inline-block pr-2 md:pr-0 w-14 md:w-[122px] lg:w-[122px] xl:w-[122px] 2xl:w-[122px]">
                      <img src={textLogo} alt={textLogo} />
                    </picture>
                    <p className="text-xs md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal sm:pl-4 font-helvetica inline-block capitalize text-white">
                      your fashion brand today
                    </p>
                  </div>
                  <div className="btn flex gap-4">
                    <Button bg="transparent" text="Try The App" />
                    <Button text="Book A Call" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
