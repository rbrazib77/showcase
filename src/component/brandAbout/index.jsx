import React from "react";
import b1 from "../../assets/images/brand/b1.webp";
import b2 from "../../assets/images/brand/b2.webp";
import b3 from "../../assets/images/brand/b3.webp";
import b4 from "../../assets/images/brand/b4.webp";
import b5 from "../../assets/images/brand2/b5.webp";

import Slider from "react-slick";

export default function Brand() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-black">
        <div className="bg-black top-[-10px] w-[102%] -left-2 md:-left-5 lg:-left-5 xl:-left-5 2xl:-left-5 items-center rounded-t-[20%] relative md:top-[-120px] lg:top-[-200px] xl:top-[-260px] 2xl:top-[-120px] ">
          <div className="brand md:border-t-[2px] rounded-b-[40%] border-b-[2px] border-[#303030] justify-around items-center md:rounded-t-[20%] lg:rounded-t-[20%] xl:rounded-t-[20%] 2xl:rounded-t-[20%] md:rounded-b-[20%] lg:rounded-b-[20%] xl:rounded-b-[20%] 2xl:rounded-b-[20%]  overflow-hidden">
            <div className="brand-slider">
              <Slider {...settings}>
                <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[2px] after:h-[320px] after:contents-[''] after:-top-10 after:bg-[#303030]  p-3 md:p-28">
                  <picture>
                    <img
                      className="w-20 md:w-28 lg:28 xl:w-auto 2xl:w-auto block m-auto"
                      src={b1}
                      alt={b1}
                    />
                  </picture>
                </div>
                <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[2px] after:h-[280px] after:contents-[''] after:-top-10 after:bg-[#303030]  p-3 md:p-16">
                  <picture>
                    <img
                      className="w-20 md:w-28 lg:28 xl:w-auto 2xl:w-auto block m-auto"
                      src={b2}
                      alt={b2}
                    />
                  </picture>
                </div>
                <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[2px] after:h-[280px] after:contents-[''] after:-top-10 after:bg-[#303030]  p-3 md:p-16">
                  <picture>
                    <img
                      className="w-20 md:w-28 lg:28 xl:w-auto 2xl:w-auto block m-auto"
                      src={b3}
                      alt={b3}
                    />
                  </picture>
                </div>
                <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[2px] after:h-[280px] after:contents-[''] after:-top-10 after:bg-[#303030]  p-3 md:p-16">
                  <picture>
                    <img
                      className="w-20 md:w-28 lg:28 xl:w-auto 2xl:w-auto block m-auto"
                      src={b4}
                      alt={b4}
                    />
                  </picture>
                </div>
                <div className="img flex justify-center items-center relative after:absolute after:right-0 after:w-[2px] after:h-[280px] after:contents-[''] after:-top-10 after:bg-[#303030]  p-3 md:p-16">
                  <picture>
                    <img
                      className="w-20 md:w-28 lg:28 xl:w-auto 2xl:w-auto block m-auto"
                      src={b5}
                      alt={b5}
                    />
                  </picture>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
