import React, { useRef, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import stage from "../../assets/video/black.webm";
import { FaPlayCircle } from "react-icons/fa";
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
    <section className="bg-black pb-[440px]">
      <div>
        <div className="">
          <h2 className="text-6xl text-[#FFFFFF] leading-[120%] text-center font-medium pb-[26px] pt-[153px]">
            In 3 <span className="text-[#F7381E] italic">Simple</span> Steps
          </h2>
          <p className="text-[18px] px-[30px] text-[#C0C0C0] text-center m-auto max-w-[700px] leading-[138%] font-helvetica font-medium pb-[237px]">
            Taking just a few days,we take 2D static e-commerce product images
            and propel them into their immersive 3D form, displayed in real time
            augmented reality.
          </p>
        </div>
        <div className="flex justify-between items-center pl-[150px] pr-[87px]  border-b-[1px] border-[#363636] pb-8">
          <div className="flex items-center">
            <li className="list-none text-[#B7B7B7] text-6xl pr-[65px] ">
              01.
            </li>
            <h1 className="text-[#B7B7B7] text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
              Renders
            </h1>
            <span>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-4xl text-[#F7381E] p-2 border h-[70px] w-[70px] border-[#F7381E] rounded-full" />
              </a>
            </span>
          </div>
          <div className="w-[356px] h-[326px] relative z-10">
            <video
              src={stage}
              ref={videoRef}
              id="myVideo"
              controls
              muted
              onClick={handleVideoClick}
              className="w-full h-full"
            ></video>
            {!isOpen && (
              <span
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleVideoClick}
              >
                <FaPlayCircle className="text-white text-3xl" />
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between m-auto mt-[70px] mb-[70px] items-center pl-[150px] pr-[87px] border-b-[1px] border-[#363636] pb-8">
          <div className="flex items-center">
            <li className="list-none text-[#B7B7B7] text-6xl pr-[65px] ">
              02.
            </li>
            <h1 className="text-[#B7B7B7] text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
            Experience
            </h1>
            <span>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-4xl text-[#F7381E] p-2 border h-[70px] w-[70px] border-[#F7381E] rounded-full" />
              </a>
            </span>
          </div>
          <div className="w-[356px] h-[326px] relative z-10">
            <video
              src={stage}
              ref={videoRef}
              id="myVideo"
              controls
              muted
              onClick={handleVideoClick}
              className="w-full h-full"
            ></video>
            {!isOpen && (
              <span
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleVideoClick}
              >
                <FaPlayCircle className="text-white text-3xl" />
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between m-auto items-center  pl-[150px] pr-[87px] border-b-[1px] border-[#363636] pb-8">
          <div className="flex items-center">
            <li className="list-none text-[#B7B7B7] text-6xl pr-[65px] ">
              03.
            </li>
            <h1 className="text-[#B7B7B7] text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
              Deployment
            </h1>
            <span>
              <a href="#">
                <IoIosArrowRoundUp className="inline-block rotate-45 text-4xl text-[#F7381E] p-2 border h-[70px] w-[70px] border-[#F7381E] rounded-full" />
              </a>
            </span>
          </div>
          <div className="w-[356px] h-[326px] relative z-10">
            <video
              src={stage}
              ref={videoRef}
              id="myVideo"
              controls
              muted
              onClick={handleVideoClick}
              className="w-full h-full"
            ></video>
            {!isOpen && (
              <span
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleVideoClick}
              >
                <FaPlayCircle className="text-white text-3xl" />
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
