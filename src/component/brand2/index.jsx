import React from "react";
import b1 from "../../assets/images/brand2/b1.webp";
import b2 from "../../assets/images/brand2/b2.webp";
import b3 from "../../assets/images/brand2/b3.webp";
import b4 from "../../assets/images/brand2/b4.webp";
import b5 from "../../assets/images/brand2/b5.webp";
import Slider from "react-slick";

export default function Brand2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-black -mt-24 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:-mt-0 md:pt-[60px] lg:pt-[60px] xl:pt-[60px] 2xl:pt-[60px] pb-12 sm:pb-0">
        ,
        <div className="xl:px-[100px]">
          <h1 className=" font-artusiG leading-[160%] text-2xl md:text-3xl lg:text-[80px] xl:text-[80px] 2xl:text-[80px] text-center md:text-left lg:text-left xl:text-left 2xl:text-left italic text-[#FFFFFF] pb-7 md:pb-14 lg:pb-14 xl:pb-14 2xl:pb-14">
            As seen in
          </h1>
        </div>
        <div className="brand border-t border-b border-[#303030] overflow-hidden ">
          <div className="brand-slider">
            <Slider {...settings}>
              <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[1px] after:h-[250px] after:contents-[''] after:-top-10 after:bg-[#303030] p-10">
                <picture>
                  <img
                    className="w-28 xl:w-auto block m-auto"
                    src={b1}
                    alt={b1}
                  />
                </picture>
              </div>
              <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[1px] after:h-[250px] after:contents-[''] after:-top-10 after:bg-[#303030] p-10">
                <picture>
                  <img
                    className="w-28 xl:w-auto block m-auto"
                    src={b2}
                    alt={b2}
                  />
                </picture>
              </div>
              <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[1px] after:h-[250px] after:contents-[''] after:-top-10 after:bg-[#303030] p-10">
                <picture>
                  <img
                    className="w-28 xl:w-auto block m-auto"
                    src={b3}
                    alt={b3}
                  />
                </picture>
              </div>
              <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[1px] after:h-[250px] after:contents-[''] after:-top-10 after:bg-[#303030] p-10">
                <picture>
                  <img
                    className="w-28 xl:w-auto block m-auto"
                    src={b4}
                    alt={b4}
                  />
                </picture>
              </div>
              <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[1px] after:h-[250px] after:contents-[''] after:-top-10 after:bg-[#303030] p-10">
                <picture>
                  <img
                    className="w-28 xl:w-auto block m-auto"
                    src={b5}
                    alt={b5}
                  />
                </picture>
              </div>
            </Slider>
          </div>
        </div>
        {/* <div className="container px-6 md:px-0">
          <p className="font-helvetica font-medium text-white text-2xl md:text-[52px] max-w-[952px] leading-[76px] pt-10">
            Hosted on our platform, or directly integrated into your website or{" "}
            <span className="font-artusi italic">via NFC</span>
          </p>
        </div> */}
      </section>
    </>
  );
}
