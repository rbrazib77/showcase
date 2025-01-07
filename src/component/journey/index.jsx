import React, { useRef, useState } from "react";
import journey from "../../assets/images/journey/journey.png";
const index = () => {
  const [isOpen, setOpen] = useState(false);
  const videoRef = useRef(null);


  // const handleVideoClick = () => {
  //   const video = videoRef.current;
  //   if (video.paused) {
  //     video.play();
  //     setOpen(!isOpen);
  //   } else {
  //     video.pause();
  //     setOpen(!isOpen);
  //   }
  // };
  return (
    <section className="bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium pt-10 md:pt-24 lg:pt-24 xl:pt-24 2xl:pt-24 leading-[141%] pb-0 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 text-center text-[28px] md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl ">
          Our journey <span className="text-[#F7381E] italic">So Far</span>
        </h2>
        <p className="text-[#C0C0C0] text-center px-[10px] md:px-[130px] lg:px-[130px] xl:px-[130px] 2xl:px-[130px] font-medium font-helvetica pb-10 md:pb-32 lg:pb-32 xl:pb-32 2xl:pb-32 pt-6 text-sm md:text-2xl lg:text-2xl 2xl:text-2xl w-[315px]  md:w-[1075px] lg:w-[1075px] xl:w-[1075px] 2xl:w-[1075px]  leading-[141%]  relative left-[50%] translate-x-[-50%]">
          Recently seen at MIDO, MICAM, London Fashion Week and Milan Fashion
          Week. Here on Class Moda TV -
        </p>

        <div className="">
          <a
            target="_blank"
            href="https://video.milanofinanza.it/video/micam-milano-97-l-inaugurazione-del-salone-internazionale-della-calzatura-al45dS3hBr2J?fbclid=IwAR0_zldHWGm4ngGOmey6sfCnh7jRsclEdo6BmzlUt8tP8Qj7qTCiwIQ7zYo"
          >
            <picture>
              <img src={journey} alt="" />
            </picture>
          </a>
          {/* <FaPlay className="text-white" /> */}
        </div>
      </div>
    </section>
  );
};

export default index;
