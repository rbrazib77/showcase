import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import advisors1 from "../../assets/images/advisors/advisors1.png";
import advisors2 from "../../assets/images/advisors/advisors2.png";
import advisors3 from "../../assets/images/advisors/advisors3.png";
import advisors4 from "../../assets/images/advisors/advisors4.png";
import advisors5 from "../../assets/images/advisors/advisors5.png";
import advisors6 from "../../assets/images/advisors/advisors6.png";
import Slider from "react-slick";
const index = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
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
          slidesToShow: 2,
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
    <section className="bg-black py-10 md:py-32 lg:py-32 xl:py-32 2xl:py-32 ">
<<<<<<< HEAD
      <div className="max-w-screen-2xl mx-auto">
=======
      <div className="md:cus-container lg:cus-container xl:cus-container 2xl:cus-container">
>>>>>>> origin/main
        <h2 className="text-[#FFFFFF] font-helvetica font-medium leading-[120%] pb-6 text-center text-[28px] md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl ">
          Advisors
        </h2>
        <p className="text-[#C0C0C0] text-center text-centerpx-[10px] md:px-[130px] lg:px-[130px] xl:px-[130px] 2xl:px-[130px] font-medium font-helvetica pb-10 md:pb-40 lg:pb-40 xl:pb-40 2xl:pb-40 text-sm md:text-2xl lg:text-2xl 2xl:text-2xl w-[288px]  md:w-[1187px] lg:w-[1187px] xl:w-[1187px] 2xl:w-[1187px]  leading-[141%]  relative left-[50%] translate-x-[-50%]">
          Showcase X is supported by a leading board of advisors from the
          fashion industry.
        </p>
        <div className="hidden md:block lg:block xl:block 2xl:block">
        <div className="md:flex lg:flex xl:flex 2xl:flex mb-6 md:mb-24 lg:mb-24 xl:mb-24 2xl:mb-24 ">
          <div className=" md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] relative ">
            <picture>
              <img src={advisors1} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Peter
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] md:mx-9 lg:mx-9 xl:mx-9 2xl:mx-9 my-6 sm:my-0 relative">
            <picture>
              <img src={advisors2} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Francesco
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px relative">
            <picture>
              <img src={advisors3} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Michael
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex lg:flex xl:flex 2xl:flex">
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px relative ">
            <picture>
              <img src={advisors4} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Donald
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] md:mx-9 lg:mx-9 xl:mx-9 2xl:mx-9 my-6 sm:my-0 relative ">
            <picture>
              <img src={advisors5} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Sofia
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] relative">
            <picture>
              <img src={advisors6} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-6 py-8 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-3xl">
                Saverrio
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-5xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <Slider {...settings}>
        <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] relative">
            <picture>
              <img src={advisors1} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-2 py-2  w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Peter
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-2xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
        </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] md:mx-9 lg:mx-9 xl:mx-9 2xl:mx-9 my-6 sm:my-0 relative">
            <picture>
              <img src={advisors2} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-2 py-2 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Francesco
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-2xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px relative">
            <picture>
              <img src={advisors3} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-2 py-2 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Michael
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-2xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px relative ">
            <picture>
              <img src={advisors4} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-2 py-2 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Donald
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-2xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] md:mx-9 lg:mx-9 xl:mx-9 2xl:mx-9 my-6 sm:my-0 relative ">
            <picture>
              <img src={advisors5} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-2 py-2 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Sofia
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-2xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          <div className="md:w-[535px] lg:w-[535px] xl:w-[535px] 2xl:w-[535px] relative">
            <picture>
              <img src={advisors6} className="w-full" alt="" />
            </picture>
            <div className="bg-[#FFFFFF25] flex justify-between px-2 py-2 w-full absolute bottom-0 left-0">
              <p className="font-helvetica text-[#FFFFFF] font-medium text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                Saverrio
              </p>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-2xl text-white duration-300 ease-linear hover:text-highlight" />
              </a>
            </div>
          </div>
          </Slider>
        </div>
       
      </div>
    </section>
  );
};

export default index;
