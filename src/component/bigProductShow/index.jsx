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
          <div className="txt-box pt-14 pb-20">
            <h6 className="font-helvetica font-medium text-2xl md:text-[62px] leading-normal lg:text-[80px] py-2 text-white">
              Partnering With Major{" "}
              <span className="font-artusi italic font-thin">Brands</span>
            </h6>
            <p className="font-helvetica text-[#ffffff] font-normal text-bse md:text-xl max-w-[900px]">
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

            {/* <VideoPlayer
                            className="video"
                            src={video1}
                            autoPlay={true}
                            muted={true}
                        /> */}
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
            <div className="content absolute bottom-10 w-full">
              <div className="container px-6 sm:px-0 ">
                <div className="md:flex justify-between items-end">
                  <div className="md:w-1/2 mt-15">
                    <div className="box border border-white p-5 md:p-8 rounded-2xl">
                      <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
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
                    <div className="box border border-white flex p-5 md:p-8 rounded-2xl">
                      <div className="w-[90%]">
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          AR Experience{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          9% increase in conversion{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          2X Product Awareness{" "}
                        </p>
                      </div>
                      <div className="w-[10%]">
                        <a href="#">
                          <FaArrowUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
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
              <div className="brand absolute -top-40 sm:top-10 left-0">
                <picture>
                  <img className="w-32 md:w-auto block" src={b2} alt="" />
                </picture>
              </div>
            </div>
            <div className="content absolute bottom-10 w-full">
              <div className="container px-6 sm:px-0 ">
                <div className="md:flex justify-between items-end">
                  <div className="md:w-1/2 mt-15">
                    <div className="box border border-white p-5 md:p-8 rounded-2xl">
                      <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
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
                  <div className="md:w-1/3 mt-10">
                    <div className="box border border-white flex p-5 md:p-8 rounded-2xl">
                      <div className="w-[90%]">
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          AR Experience{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          9% increase in conversion{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          2X Product Awareness{" "}
                        </p>
                      </div>
                      <div className="w-[10%]">
                        <a href="#">
                          <FaArrowUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
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

            {/* <VideoPlayer
                            className="video"
                            src={video1}
                            autoPlay={true}
                            muted={true}
                        /> */}
            <video controls muted loop autoPlay width="100%" id="myVideo">
              <source src={video1} type="video/mp4" />
            </video>
            <div className="container px-6 sm:px-0 relative">
              <div className="brand absolute -top-40 sm:top-10 left-0">
                <picture>
                  <img className="w-32 md:w-auto block" src={b2} alt="" />
                </picture>
              </div>
            </div>
            <div className="content absolute bottom-10 w-full">
              <div className="container px-6 sm:px-0 ">
                <div className="md:flex justify-between items-end">
                  <div className="md:w-1/2 mt-15">
                    <div className="box border border-white p-5 md:p-8 rounded-2xl">
                      <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
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
                    <div className="box border border-white flex p-5 md:p-8 rounded-2xl">
                      <div className="w-[90%]">
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          AR Experience{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          9% increase in conversion{" "}
                        </p>
                        <p className="font-helvetica text-white font-normal md:leading-[32px] lg:leading-[34px] xl:leading-[34px] text-base md:text-2xl">
                          2X Product Awareness{" "}
                        </p>
                      </div>
                      <div className="w-[10%]">
                        <a href="#">
                          <FaArrowUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
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
