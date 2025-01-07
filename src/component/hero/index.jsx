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
  var apps = {
    dots: false,
    infinite: true,
    fade: false,
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
          <div className="w-[100dvh] h-[400px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls loop muted autoPlay width="100%" id="#myVideo">
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100dvh] h-[400px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls loop muted autoPlay width="100%" id="#myVideo">
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className="w-[100dvh] h-[400px] sm:h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <video controls muted loop autoPlay width="100%" id="#myVideo">
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </Slider>
<<<<<<< HEAD
        <div className="content absolute top-10 lg:top-24 xl:top-24 2xl:top-24 md:-top-10 w-full">
          <div className="max-w-screen-2xl mx-auto relative">
            <div className="hidden md:block lg:block xl:block 2xl:block absolute top-[-380px]  right-4">
              <div className="max-w-screen-2xl">
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
=======
        <div className="content  absolute top-10 lg:top-24 xl:top-24 2xl:top-24 md:-top-10 w-full">
          <div className="hidden md:block lg:block xl:block 2xl:block absolute top-[-10px] md:top-[250px] lg:top-[250px] xl:top-[250px] 2xl:top-[250px] right-0">
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
              <div className=" md:w-3/5 lg:w-2/5">
                <div className="box px-4 pb-5 pt-3 sm:pt-0 sm:pb-0 inline-block w-[293px] md:w-[577px]  lg:w-[577px] xl:w-[577px] 2xl:lg:w-[577px]  bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] p-2 md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl sm:p-8 backdrop-blur-xl border border-[#676767] mt-40 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%]">
                  <h4 className="font-helvetica font-medium text-xl md:text-5xl lg:text-5xl text-white leading-[30px]">
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
              <div className=" hidden lg:block xl:block 2xl:block md:w-2/5 lg:w-1/5  mt-5 sm:mt-0 text-right gap-4 sm:gap-0  md:block">
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
>>>>>>> origin/main
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
            <div className="max-w-screen-2xl mx-auto">
              <div className="md:flex justify-between md:mt-[32%]">
                {/* The Immersive Product Start */}
                <div className=" md:w-3/5 lg:w-2/5">
                  <div className="box px-4 pb-5 pt-3 sm:pt-0 sm:pb-0 inline-block w-[293px] md:w-[577px]  lg:w-[577px] xl:w-[577px] 2xl:lg:w-[577px]  bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] p-2 md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl sm:p-8 backdrop-blur-xl border border-[#676767]  md:mr-1 lg:mr-0">
                    <h4 className="font-helvetica font-medium text-xl md:text-5xl lg:text-5xl text-white leading-[30px]">
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
                {/* The Immersive Product End */}
                {/* Mobile app Start */}
                <div className=" hidden lg:block xl:block 2xl:block md:w-2/5 lg:w-1/5  mt-5 sm:mt-0 text-right gap-4 sm:gap-0  md:block">
                  <div className="box w-[303px] bg-gradient-to-t to-[#6767673b] via-[#74747433] from-[#ffffff22] p-2 md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl backdrop-blur-sm border border-[#67676796] text-left">
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
                  <div className="box w-[303px] bg-gradient-to-t to-[#6767672a] via-[#74747433] from-[#ffffff22] p-6 rounded-2xl backdrop-blur-sm border border-[#67676796] md:mt-5 text-left">
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
                {/* Mobile app End */}
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="md:w-2/5 lg:w-1/5 mt-24  sm:mt-0 text-right gap-4 sm:gap-0 block  md:hidden lg:hidden xl:hidden 2xl:hidden">
=======
        <div className="md:w-2/5 lg:w-1/5 mt-24 sm:mt-0 text-right gap-4 sm:gap-0 block  md:hidden lg:hidden xl:hidden 2xl:hidden">
>>>>>>> origin/main
          <Slider {...apps}>
            <div className="box w-[303px] bg-gradient-to-t to-[#6767673b] via-[#74747433] from-[#ffffff22] p-5 md:p-6 lg:p-6 xl:p-6 2xl:p-6 rounded-2xl backdrop-blur-sm border border-[#67676796]   md:mt-[120%] lg:mt-[175%] text-left">
              <h4 className="font-helvetica font-medium leading-[120%] text-xs text-white flex justify-between pb-2">
                {" "}
                Mobile app{" "}
                <span>
                  <FaCheckCircle className="inline-block text-2xl" />
                </span>
              </h4>
              <p className="font-helvetica text-sm leading-[133%] font-normal text-[#A6A2A2] ">
                Hosted directly on our flagship <br /> app
              </p>
            </div>
            <div className="box w-[303px] bg-gradient-to-t to-[#6767672a] via-[#74747433] from-[#ffffff22] p-6 rounded-2xl backdrop-blur-sm border border-[#67676796] md:mt-10 text-left">
              <h4 className="font-helvetica font-medium text-xs text-white flex justify-between pb-2">
                {" "}
                Web Integration{" "}
                <span>
                  <FaCheckCircle className="inline-block text-2xl" />
                </span>
              </h4>
              <p className="font-helvetica text-sm leading-[133%] font-normal text-[#A6A2A2] ">
                Directly integrated into a brands e-commerce platform
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
