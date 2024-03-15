import React from "react";
import b2 from "../../assets/images/brand/b2.webp";
import p1 from "../../assets/images/big/p1.webp";
import { FaArrowUp } from "react-icons/fa";
import VideoPlayer from "react-background-video-player";
import Slider from "react-slick";
import video1 from "../../assets/video/sun.webm";

export default function BigProduct() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-black big-product">
        <div className="xl:pl-[100px]">
          <div className="txt-box md:pt-14 lg:pt-14 xl:pt-14 2xl:pt-14 pb-9 md:pb-20 lg:pb-20 xl:pb-20 2xl:pb-20">
            <h6 className="font-helvetica font-medium text-2xl md:text-[62px]  leading-[161%] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] py-2 text-white">
              Partnering With Major{" "}
              <span className="font-artusi italic font-thin">Brands</span>
            </h6>
            <p className="font-helvetica text-[#ffffff] leading-[142%] font-normal text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl max-w-[360px] md:max-w-[900px] lg:max-w-[900px] xl:md:max-w-[900px] 2xl:md:max-w-[900px]">
              The world of spatial computing is here. ShowcaseX platform already
              hosts immersive product experiences for the likes of Curry and
              Paxton 1880, Charles Harbison Studio and Olubiyi Thomas, driving
              increased product session times, awareness, and engagement far
              beyond traditional digital 2D product browsing.
            </p>
          </div>
        </div>
        <Slider {...settings}>
          <div className="bg w-[95dvw] h-screen relative">
            {/* Background Image */}
            <video controls muted loop autoPlay width="100%" id="myVideo">
              <source src={video1} type="video/mp4" />
            </video>
            <div className="container px-6 sm:px-0 relative">
              <div className="brand absolute -top-96 sm:top-10 left-0">
                <picture>
                  <img className="w-32 md:w-auto block" src={b2} alt="" />
                </picture>
              </div>
            </div>
            <div className="content md:absolute lg:absolute xl:absolute 2xl:absolute bottom-10 mt-[18px] md:mt-0 lg:mt-0 xl:mt-0 2xl::mt-0 w-full">
              <div className="container px-6 sm:px-0 ">
                <div className="md:flex justify-between items-end">
                  <div className="md:w-1/2 mt-15">
                    <div className="box md:border lg:border xl:border 2xl:border relative lolita border-white bg-[#383838] md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent p-2 md:p-8 lg:p-8 xl:p-8 2xl:8 rounded-2xl overflow-hidden">
                      <span className="blur-shap-home w-full h-40 md:hidden lg:hidden xl:hidden 2xl:hidden block absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  bg-[#030303c0]  z-[1]"></span>
                      <p className="font-helvetica  md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none rounded-xl relative  z-[1111]  md:bg-transparent lg:bg-transparent 2xl:bg-transparent xl:bg-transparent text-white font-normal leading-[142%] md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl">
                        A British heritage eyewear brand, with over 100{" "}
                        <span className="font-artusi italic">
                          years of history
                        </span>{" "}
                        and who hold a Royal Warrant bestowed by HRH the Duke of
                        Windsor. We created an{" "}
                        <span className="font-artusi italic">
                          immersive product
                        </span>{" "}
                        display around their hero product, the Yvan Frame, which
                        Michael Caine wore throughout the 1960's, in films like
                        The Italian Job, The Iprcess File, Get Carter etc.
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 mt-10">
                    <div className="box md:border lg:border xl:border 2xl:border relative border-white bg-[#383838] md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent flex p-5 md:p-8 rounded-2xl overflow-hidden">
                      <span className="blur-shap-home2 md:hidden lg:hidden xl:hidden 2xl:hidden w-full h-36 block absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  bg-[#030303c0]  z-[11]"></span>
                      <div className="w-[90%] backdrop-blur-xl md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none z-[1111]  md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent ">
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px]  text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl ">
                          AR Experience{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px]  text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl ">
                          9% increase in conversion{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px]  text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          2X Product Awareness{" "}
                        </p>
                      </div>
                      <div className="w-[10%] z-[1111] mt-3 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 ">
                        <a href="#">
                          <FaArrowUp className="inline-block rotate-45  text-[25px] md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white duration-300 ease-linear hover:text-highlight" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg w-[95dvw] h-screen relative">
            {/* Background Image */}
            <video controls muted loop autoPlay width="100%" id="myVideo">
              <source src={video1} type="video/mp4" />
            </video>
            <div className="container px-6 sm:px-0 relative">
              <div className="brand absolute -top-96 sm:top-10 left-0">
                <picture>
                  <img className="w-32 md:w-auto block" src={b2} alt="" />
                </picture>
              </div>
            </div>
            <div className="content md:absolute lg:absolute xl:absolute 2xl:absolute bottom-10 mt-[18px] md:mt-0 lg:mt-0 xl:mt-0 2xl::mt-0 w-full">
              <div className="container px-6 sm:px-0 ">
                <div className="md:flex justify-between items-end">
                  <div className="md:w-1/2 mt-15">
                    <div className="box md:border lg:border xl:border 2xl:border border-white bg-[#383838] md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent p-2 md:p-8 lg:p-8 xl:p-8 2xl:8 rounded-2xl">
                      <p className="font-helvetica backdrop-blur-xl md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none  bg-[#151515d4] rounded-xl  md:bg-transparent lg:bg-transparent 2xl:bg-transparent xl:bg-transparent text-white font-normal leading-[142%] md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl">
                        A British heritage eyewear brand, with over 100{" "}
                        <span className="font-artusi italic">
                          years of history
                        </span>{" "}
                        and who hold a Royal Warrant bestowed by HRH the Duke of
                        Windsor. We created an{" "}
                        <span className="font-artusi italic">
                          immersive product
                        </span>{" "}
                        display around their hero product, the Yvan Frame, which
                        Michael Caine wore throughout the 1960's, in films like
                        The Italian Job, The Iprcess File, Get Carter etc.
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 mt-10">
                    <div className="box md:border lg:border xl:border 2xl:border border-white bg-[#383838] md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent flex p-5 md:p-8 rounded-2xl">
                      <div className="w-[90%] backdrop-blur-xl md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none  bg-[#151515d4] lolita md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent">
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          AR Experience{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          9% increase in conversion{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          2X Product Awareness{" "}
                        </p>
                      </div>
                      <div className="w-[10%] ">
                        <a href="#">
                          <FaArrowUp className="inline-block rotate-45 text-[25px] md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white duration-300 ease-linear hover:text-highlight" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg w-[95dvw] h-screen relative">
            {/* Background Image */}
            <video controls muted loop autoPlay width="100%" id="myVideo">
              <source src={video1} type="video/mp4" />
            </video>
            <div className="container px-6 sm:px-0 relative">
              <div className="brand absolute -top-96 sm:top-10 left-0">
                <picture>
                  <img className="w-32 md:w-auto block" src={b2} alt="" />
                </picture>
              </div>
            </div>
            <div className="content md:absolute lg:absolute xl:absolute 2xl:absolute bottom-10 mt-[18px] md:mt-0 lg:mt-0 xl:mt-0 2xl::mt-0 w-full">
              <div className="container px-6 sm:px-0 ">
                <div className="md:flex justify-between items-end">
                  <div className="md:w-1/2 mt-15">
                    <div className="box md:border lg:border xl:border 2xl:border border-white bg-[#383838] md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent p-2 md:p-8 lg:p-8 xl:p-8 2xl:8 rounded-2xl">
                      <p className="font-helvetica backdrop-blur-xl md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none  bg-[#151515d4] rounded-xl  md:bg-transparent lg:bg-transparent 2xl:bg-transparent xl:bg-transparent text-white font-normal leading-[142%] md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl">
                        A British heritage eyewear brand, with over 100{" "}
                        <span className="font-artusi italic">
                          years of history
                        </span>{" "}
                        and who hold a Royal Warrant bestowed by HRH the Duke of
                        Windsor. We created an{" "}
                        <span className="font-artusi italic">
                          immersive product
                        </span>{" "}
                        display around their hero product, the Yvan Frame, which
                        Michael Caine wore throughout the 1960's, in films like
                        The Italian Job, The Iprcess File, Get Carter etc.
                      </p>
                    </div>
                  </div>
                  <div className=" md:w-1/3 mt-10">
                    <div className="box md:border lg:border xl:border 2xl:border border-white bg-[#383838] md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent flex p-5 md:p-8 rounded-2xl">
                      <div className="w-[90%] backdrop-blur-xl md:backdrop-blur-none lg:backdrop-blur-none xl:backdrop-blur-none 2xl:backdrop-blur-none  bg-[#151515d4] lolita md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent">
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          AR Experience{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          9% increase in conversion{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
                          2X Product Awareness{" "}
                        </p>
                      </div>
                      <div className="w-[10%]">
                        <a href="#">
                          <FaArrowUp className="inline-block rotate-45 text-[25px] md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-white duration-300 ease-linear hover:text-highlight" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
