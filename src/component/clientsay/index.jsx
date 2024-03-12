import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import mask from "../../assets/images/mask.png";
import sliderLogo from "../../assets/images/sliderLogo/logo-slider.png";

export default function Slider() {
  // const childElement = childRef.current.;
  let [sliderIndex, setSliderIndex] = useState(0);

  const slideBox = useRef(null);

  // useEffect(() => {

  //   if (sliderIndex >= 0 && sliderIndex < item.length) {
  //     // item[sliderIndex - 1]?.classList.remove('slide-active'); // Remove from the previous slide (if it exists)
  //     // item[sliderIndex - 1]?.classList.add('sActive'); // Remove from the previous slide (if it exists)
  //     // item[sliderIndex + 1]?.classList.remove('slide-active'); // Remove from the previous slide (if it exists)
  //     // item[sliderIndex + 1]?.classList.add('sActive'); // Remove from the previous slide (if it exists)
  //     // item[sliderIndex].classList.remove('sActive'); // Add to the current slide
  //     // item[sliderIndex].classList.add('slide-active'); // Add to the current slide

  //   }

  //   console.log(item.length); // Log the DOM elements or an empty NodeList
  // }, [sliderIndex, slideBox]); // Depend on sliderIndex and slideBox in the dependency array

  const showSlider = (type) => {
    const item = slideBox.current.querySelectorAll(".slideItem");
    const lastItemInd = item.length - 1;
    if (type === "next") {
      if (sliderIndex < lastItemInd) {
        setSliderIndex(++sliderIndex);
        slideBox.current.appendChild(item[0]);
        for (let inde in item) {
          if (inde == 1) {
            item[1].classList.add("slide-active");
          } else {
            item[inde].classList.remove("slide-active");
          }
        }
      }
    } else {
      if (sliderIndex > 0) {
        setSliderIndex(--sliderIndex);
        slideBox.current.prepend(item[lastItemInd]);
        for (let inde in item) {
          if (inde == lastItemInd) {
            item[lastItemInd].classList.add("slide-active");
          } else {
            item[inde].classList.remove("slide-active");
          }
        }
      }
    }
  };
  console.log(sliderIndex);

  return (
    <section className="bg-black  pb-[120px] relative">
      <h2 className="font-artusiG  leading-[120%] pb-7 text-center text-[40px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] text-[#FFFFFF]">
        What Our{" "}
        <span className="text-[#F7381E] font-bold italic">Clients Say</span>
      </h2>
      <p className=" font-artusiC max-w-[666px] m-auto text-center text-lg leading-[30px] px-8 text-[#8E8E8E] pb-[70px]">
        Don't just take our word for it, see what some of our first clients have
        said, partnering with showcase X. on
      </p>

      <div
        className="relative slideBox z-[9999] h-[350px] md:h-[553px] lg:h-[553px] xl:h-[553px] 2xl:h-[553px] m-auto w-[350px] md:w-[1475px] lg:w-[1475px] xl:w-[1475px] 2xl:w-[1475px]"
        ref={slideBox}
      >
        {/*card */}
        <div className="slideItem bg-[#E0DBCE] sActive overflow-hidden absolute   h-[100%] top-[-100px] w-[100%] shadow-2xl shadow-[#00000040] rounded-[10px]">
          <span className="absolute z-[-7777] -top-24 left-0">
            <img src={mask} alt="" />
          </span>
          <div className="pl-[20px] md:pl-[180px] lg:pl-[180px] xl:pl-[180px] 2xl:pl-[180px] pt-[20px] md:pt-[44px] lg:pt-[44px] xl:pt-[44px] 2xl:pt-[44px] pr-[20px] md:pr-[60px] lg:pr-[60px] xl:pr-[60px] 2xl:pr-[60px] z-[7777] pb-80px">
            <div className="flex justify-between">
              <div className="flex">
                <span className=" text-center block h-16 w-10 bg-red-500 rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]"></span>
                <span className=" text-center block h-16 w-10 bg-red-500 rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]  ml-3"></span>
              </div>
              <div>
                <img src={sliderLogo} alt="sliderLogo" />
              </div>
            </div>
            <div className="pl-[10px] pt-3 sm:pt-0 md:pl-[100px] lg:pl-[100px] xl:pl-[100px] 2xl:pl-[100px]">
              <p className="text-[18px] md:text-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] font-medium capitalize font-artusiC pr-3 md:pr-24 lg:pr-24 xl:pr-24 2xl:pr-24 text-[#000000]">
                I really appreciate the hyper-realism and the way the quality of
                the augmented reality truly reflects my brands DNA.
              </p>
              <h4 className="font-bold text-[#F7381E] artusiG italic text-[18px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] pt-[20px] md:pt-[42px] lg:pt-[42px] xl:pt-[42px] 2xl:pt-[42px] pb-2 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 ">
                Olubiyi Thomas
              </h4>
              <h6 className="font-artusiC font-medium text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                Founder of Olubiyi Thomas
              </h6>
              <span className="block h-[9px] w-[160px] md:w-[230px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px] bg-red-500 rounded-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]"></span>
            </div>
          </div>
        </div>

        {/*card */}
        <div className="bg-[#E0DBCE] slideItem sActive absolute  h-[100%]  w-[100%]  rounded-[10px]  shadow-2xl shadow-[#00000040]  ">
          <span className="absolute z-[-7777] top-0 md:-top-24 lg:-top-24 xl:-top-24 2xl:-top-24 left-0">
            <img src={mask} alt="" />
          </span>
          <div className="pl-[20px] md:pl-[180px] lg:pl-[180px] xl:pl-[180px] 2xl:pl-[180px] pt-[20px] md:pt-[44px] lg:pt-[44px] xl:pt-[44px] 2xl:pt-[44px] pr-[20px] md:pr-[60px] lg:pr-[60px] xl:pr-[60px] 2xl:pr-[60px] z-[7777] pb-80px">
            <div className="flex justify-between">
              <div className="flex">
                <span className=" text-center block h-16 w-10 bg-red-500 rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]"></span>
                <span className=" text-center block h-16 w-10 bg-red-500 rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]  ml-3"></span>
              </div>
              <div>
                <img src={sliderLogo} alt="sliderLogo" />
              </div>
            </div>
            <div className="pl-[10px] pt-3 sm:pt-0 md:pl-[100px] lg:pl-[100px] xl:pl-[100px] 2xl:pl-[100px]">
              <p className="text-[18px] md:text-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] font-medium capitalize font-artusiC pr-3 md:pr-24 lg:pr-24 xl:pr-24 2xl:pr-24 text-[#000000]">
                I really appreciate the hyper-realism and the way the quality of
                the augmented reality truly reflects my brands DNA.
              </p>
              <h4 className="font-bold text-[#F7381E] artusiG italic text-[18px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] pt-[20px] md:pt-[42px] lg:pt-[42px] xl:pt-[42px] 2xl:pt-[42px] pb-2 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 ">
                Olubiyi Thomas
              </h4>
              <h6 className="font-artusiC font-medium text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                Founder of Olubiyi Thomas
              </h6>
              <span className="block h-[9px] w-[160px] md:w-[230px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px] bg-red-500 rounded-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]"></span>
            </div>
          </div>
        </div>
        {/*card */}
        <div className="bg-[#E0DBCE] slideItem sActive absolute   h-[100%]  w-[100%]  shadow-2xl shadow-[#00000040] rounded-[10px]  ">
          <span className="absolute z-[-7777] top-0 md:-top-24 lg:-top-24 xl:-top-24 2xl:-top-24 left-0">
            <img src={mask} alt="" />
          </span>
          <div className="pl-[20px] md:pl-[180px] lg:pl-[180px] xl:pl-[180px] 2xl:pl-[180px] pt-[20px] md:pt-[44px] lg:pt-[44px] xl:pt-[44px] 2xl:pt-[44px] pr-[20px] md:pr-[60px] lg:pr-[60px] xl:pr-[60px] 2xl:pr-[60px] z-[7777] pb-80px">
            <div className="flex justify-between">
              <div className="flex">
                <span className=" text-center block h-16 w-10 bg-red-500 rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]"></span>
                <span className=" text-center block h-16 w-10 bg-red-500 rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]  ml-3"></span>
              </div>
              <div>
                <img src={sliderLogo} alt="sliderLogo" />
              </div>
            </div>
            <div className="pl-[10px] pt-3 sm:pt-0 md:pl-[100px] lg:pl-[100px] xl:pl-[100px] 2xl:pl-[100px]">
              <p className="text-[18px] md:text-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] font-medium capitalize font-artusiC pr-3 md:pr-24 lg:pr-24 xl:pr-24 2xl:pr-24 text-[#000000]">
                I really appreciate the hyper-realism and the way the quality of
                the augmented reality truly reflects my brands DNA.
              </p>
              <h4 className="font-bold text-[#F7381E] artusiG italic text-[18px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] pt-[20px] md:pt-[42px] lg:pt-[42px] xl:pt-[42px] 2xl:pt-[42px] pb-2 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 ">
                Olubiyi Thomas
              </h4>
              <h6 className="font-artusiC font-medium text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                Founder of Olubiyi Thomas
              </h6>
              <span className="block h-[9px] w-[160px] md:w-[230px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px] bg-red-500 rounded-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[112%] from-[-26%] from-[#000000]"></span>
            </div>
          </div>
        </div>
        {/* arrows */}
      </div>
      <div className="flex absolute bottom-[180px] md:bottom-[210px] lg:bottom-[210px] xl:bottom-[210px] 2xl:bottom-[210px] right-[60px] md:right-[360px]  lg:right-[120px] z-[9999]">
        <IoIosArrowRoundForward
          onClick={() => showSlider("prev")}
          className="text-red-500 border border-[#f45252] h-8 md:h-20 lg:h-20 xl:h-20 2xl:h-20 w-8 md:w-20 lg:w-20 xl:w-20 2xl:w-20 rounded-full text-[25px] mr-5 "
        />
        <IoIosArrowRoundBack
          onClick={() => showSlider("next")}
          className="text-red-500 border border-[#f45252] h-8 md:h-20 lg:h-20 xl:h-20 2xl:h-20 w-8 md:w-20 lg:w-20 xl:w-20 2xl:w-20 rounded-full  text-[25px]"
        />
      </div>
    </section>
  );
}

{
  /* <h2 className="font-artusiG  leading-[120%] pb-7 text-center text-[60px] text-[#FFFFFF]">
What Our
<span className="text-[#F7381E] font-bold italic">Clients Say</span>
</h2>
<p className=" font-artusi max-w-[666px] m-auto text-center text-lg leading-[30px] px-8 text-[#8E8E8E]">
Don't just take our word for it, see what some of our first clients have
said, partnering with showcase X. on
</p> */
}
