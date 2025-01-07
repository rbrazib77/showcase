import React from "react";
import { useState } from "react";
import Slider from "react-slick";

export default function Services() {
  let [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                background: "red",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0",
                background: "red",
                color: "transparent",
              }
        }
      ></div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "-15%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#white",
                      fontSize: "12px",
                      background: "white",
                      height: "5px",
                    }
                  : {
                      width: "30px",
                      color: "#262626",
                      fontSize: "12px",
                      background: "#FFFFFF30",
                      height: "5px",
                    }
              }
            ></div>
          ),
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-black md:pb-20 lg:pb-10 xl:pb-10 2xl:pb-10 pb-10 -mt-14 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:-mt-0">
        <div className="max-w-screen-2xl mx-auto">
          <div className="xl:px-[140px] gl:px-[140px] px-4 pt-6 lg:pt-0 xl:pt-0 2xl:pt-0">
            <div className="title pb-10 md:pb-28 lg:pb-28 xl:pb-28 2xl:pb-28">
              <div className="heading text-center">
                <h3 className="font-helvetica capitalize font-medium text-[28px] tracking-[1%] sm:text-6xl leading-[120%] text-white">
                  <span className="text-highlight italic"> 3.3%</span> average{" "}
                  <span className="font-artusiG italic  font-thin">
                    e-commerce{" "}
                  </span>{" "}
                  <br />{" "}
                  <span className="font-artusi italic font-thin">
                    conversion
                  </span>{" "}
                  rate increase
                </h3>
              </div>
              <p className="font-helvetica font-medium text-[#c0c0c0c5] text-[12px] px-8 sm:text-lg max-w-[382px] md:max-w-[776px] lg:max-w-[776px] xl:max-w-[776px] 2xl:max-w-[776px] m-auto text-center pt-3 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-5">
                showcase x drives an increase in e-commerce product purchases
                like never before. This is the next generation of online
                commerce.
              </p>
            </div>
            <div className="hidden xl:block lg:block md:block 2xl:block">
              <div className="content sm:flex justify-around flex-wrap">
                <div className="md:w-1/2 lg:w-1/3  sm:p-6">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030] duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        300%
                      </span>{" "}
                      Brand{" "}
                      <span className="font-artusi italic  font-thin">
                        equity{" "}
                      </span>{" "}
                      and <br /> loyalty{" "}
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] text-base pt-4">
                      showcase X immersive product experience means consumers
                      spend longer discovering products, enjoying the
                      experience, appreciating every intricate detail of a
                      product and understanding brand DNA on a whole new level,
                      all from the context of their own familiar setting.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 sm:p-6  mt-10">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030]  duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        5X
                      </span>{" "}
                      First Hand <br />{" "}
                      <span className="font-artusi italic  font-thin">
                        Product{" "}
                      </span>{" "}
                      Data
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] text-base pt-4">
                      When a consumer engages with an e-commerce product using
                      showcase X technology, they are able to gain a far more
                      comprehensive understanding of the product. This results
                      in far more assured purchasing decisions, ultimately
                      reducing post purchase returns.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 sm:p-6  mt-10 sm:mt-0">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030]  duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        -22%
                      </span>{" "}
                      Average{" "}
                      <span className="font-artusi italic  font-thin">
                        Decrease{" "}
                      </span>{" "}
                      In <br /> Retturns Rate{" "}
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] text-base pt-4">
                      Every product that is connected to a showcase AR display,
                      can be updated, with new experiences for the customer to
                      enjoy. This heightens value in the long run and encourages
                      customers to continue share usger generated content around
                      the product boosting awareness for a brand its products.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content block lg:hidden xl:hidden 2xl:hidden sm:flex justify-around flex-wrap">
              <Slider {...settings}>
                <div className="md:w-1/2 lg:w-1/3  sm:p-6">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030] duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        300%
                      </span>{" "}
                      Brand{" "}
                      <span className="font-artusi italic  font-thin">
                        equity{" "}
                      </span>{" "}
                      and <br /> loyalty{" "}
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] leading-[147%] text-base pt-4 pb-4">
                      showcase X immersive product experience means consumers
                      spend longer discovering products, enjoying the
                      experience, appreciating every intricate detail of a
                      product and understanding brand DNA on a whole new level,
                      all from the context of their own familiar setting.
                    </p>
                  </div>
                </div>
                {/* <div className="md:w-1/2 lg:w-1/3 sm:p-6  mt-10"> */}

                <div className="md:w-1/2 lg:w-1/3 sm:p-6">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030]  duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        5X
                      </span>{" "}
                      First Hand <br />{" "}
                      <span className="font-artusi italic  font-thin">
                        Product{" "}
                      </span>{" "}
                      Data
                    </h3>

                    <p className="font-helvetica font-medium text-[#c0c0c0c5] leading-[147%] pb-4 text-base pt-4">
                      When a consumer engages with an e-commerce product using
                      showcase X technology, they are able to gain a far more
                      comprehensive understanding of the product. This results
                      in far more assured purchasing decisions, ultimately
                      reducing post purchase returns.
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 lg:w-1/3 sm:p-6  mt-10 sm:mt-0">
                  <div className="md:w-1/2 lg:w-1/3 sm:p-6  sm:mt-0">
                    <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030]  duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                      <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                        <span className="text-highlight block text-left text-5xl pb-5">
                          {" "}
                          -22%
                        </span>{" "}
                        Average{" "}
                        <span className="font-artusi italic  font-thin">
                          Decrease{" "}
                        </span>{" "}
                        In <br /> Retturns Rate{" "}
                      </h3>
                      {/* <p className="font-helvetica font-medium text-[#c0c0c0c5] text-base pt-4 */}
                      <p className="font-helvetica font-medium text-[#c0c0c0c5] leading-[147%] text-base pt-4">
                        Every product that is connected to a showcase AR
                        display, can be updated, with new experiences for the
                        customer to enjoy. This heightens value in the long run
                        and encourages customers to continue share usger
                        generated content around the product boosting awareness
                        for a brand its products.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* Mobile version */}
            <div className="content block lg:hidden xl:hidden 2xl:hidden sm:flex justify-around flex-wrap">
              <Slider {...settings}>
                <div className="md:w-1/2 lg:w-1/3  sm:p-6">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030] duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        300%
                      </span>{" "}
                      Brand{" "}
                      <span className="font-artusi italic  font-thin">
                        equity{" "}
                      </span>{" "}
                      and <br /> loyalty{" "}
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] leading-[147%] text-base pt-4 pb-4">
                      showcase X immersive product experience means consumers
                      spend longer discovering products, enjoying the
                      experience, appreciating every intricate detail of a
                      product and understanding brand DNA on a whole new level,
                      all from the context of their own familiar setting.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 sm:p-6">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030]  duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        5X
                      </span>{" "}
                      First Hand <br />{" "}
                      <span className="font-artusi italic  font-thin">
                        Product{" "}
                      </span>{" "}
                      Data
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] leading-[147%] pb-4 text-base pt-4">
                      When a consumer engages with an e-commerce product using
                      showcase X technology, they are able to gain a far more
                      comprehensive understanding of the product. This results
                      in far more assured purchasing decisions, ultimately
                      reducing post purchase returns.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 lg:w-1/3 sm:p-6  sm:mt-0">
                  <div className="box bg-gradient-to-b to-[#45454544] from-[#4545451f] p-5 sm:p-10 border-l border-[#303030]  duration-300 ease-linear hover:border-highlight hover:to-[#4545453f] hover:from-[#45454559]">
                    <h3 className="font-helvetica capitalize font-medium text-2xl sm:text-4xl text-white leading-[48px]">
                      <span className="text-highlight block text-left text-5xl pb-5">
                        {" "}
                        -22%
                      </span>{" "}
                      Average{" "}
                      <span className="font-artusi italic  font-thin">
                        Decrease{" "}
                      </span>{" "}
                      In <br /> Retturns Rate{" "}
                    </h3>
                    <p className="font-helvetica font-medium text-[#c0c0c0c5] leading-[147%] text-base pt-4">
                      Every product that is connected to a showcase AR display,
                      can be updated, with new experiences for the customer to
                      enjoy. This heightens value in the long run and encourages
                      customers to continue share usger generated content around
                      the product boosting awareness for a brand its products
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
