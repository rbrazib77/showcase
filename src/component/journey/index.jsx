import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import journey from "../../assets/images/journey/journey.png";
const index = () => {
  const [isOpen, setOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setOpen(!isOpen);
    } else {
      video.pause();
      setOpen(!isOpen);
    }
  };
  return (
    <section className="bg-black">
      <div className="cus-container">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium pt-24 leading-[141%] pb-6 text-center text-6xl ">
          Our journey <span className="text-[#F7381E] italic">So Far</span>
        </h2>
        <p className="text-[#C0C0C0] text-center px-[130px] font-medium font-helvetica pb-32 pt-6 text-2xl w-[1075px]  leading-[141%]  relative left-[50%] translate-x-[-50%]">
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
