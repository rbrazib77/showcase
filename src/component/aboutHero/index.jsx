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
          <div className="w-[100dvh] h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <VideoPlayer
              className="video"
              src={video1}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="w-[100dvh] h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <VideoPlayer
              className="video"
              src={video2}
              autoPlay={true}
              muted={true}
            />
          </div>
          <div className="w-[100dvh] h-[768px] lg:h-[868px] xl:h-[1028px] relative sm:top-[-100px] 2xl:top-0">
            <VideoPlayer
              className="video"
              src={video3}
              autoPlay={true}
              muted={true}
            />
          </div>
        </Slider>
        <div className="content absolute top-24 md:-top-10 w-full">
          <div className="absolute top-[250px] right-0">
            <div className="cus-container">
              <div>
                <FaTwitter className="w-16 h-16 p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </div>
              <div className="my-7">
                <FaInstagram className="w-16 h-16 p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </div>
              <div>
                <FaLinkedin className="w-16 h-16 p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </div>
            </div>
          </div>
          <div className="cus-container">
            <div className="md:flex justify-between">
              <div className=" md:w-3/5 lg:w-2/5">
                <div className="box inline-block w-[600px] bg-gradient-to-t to-[#6767675e] via-[#74747433] from-[#ffffff22] xl:py-9 xl:px-[100] rounded-2xl sm:p-8 backdrop-blur-sm border border-[#676767] mt-32 sm:mt-[50%] md:mt-[80%] md:mr-1 lg:mr-0 lg:mt-[85%]">
                  <h4 className="font-helvetica font-medium text-5xl text-white leading-[56px]">
                    As{" "}
                    <span className="font-artusi italic font-thin">
                      Featured
                    </span>{" "}
                    In Fashion{" "}
                    <span className="font-artusi italic font-thin">
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
        </div>
      </section>
    </>
  );
}
