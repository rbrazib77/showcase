import React, { useRef, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import braided from "../../assets/video/braided.webm";
import trench from "../../assets/video/trench.webm";
import pink from "../../assets/video/pink.webm";
import { FaPlayCircle } from "react-icons/fa";
const index = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenTwo, setOpenTwo] = useState(false);
  const [isOpenThree, setOpenThree] = useState(false);

  const videoRefone = useRef(null);
  const videoReftwo = useRef(null);
  const videoRefthree = useRef(null);

  const handleVideoClick = () => {
    const videoOne = videoRefone.current;
    if (videoOne.paused) {
      videoOne.play();
      setOpen(!isOpen);
    } else {
      videoOne.pause();
      setOpen(!isOpen);
    }
  };
  const handleVideoTwoClick = () => {
    const videoTwo = videoReftwo.current;
    if (videoTwo.paused) {
      videoTwo.play();
      setOpenTwo(!isOpenTwo);
    } else {
      videoTwo.pause();
      setOpenTwo(!isOpenTwo);
    }
  };

  const handleVideoThreeClick = () => {
    const videoThree = videoRefthree.current;
    if (videoThree.paused) {
      videoThree.play();
      setOpenThree(!isOpenThree);
    } else {
      videoThree.pause();
      setOpenThree(!isOpenThree);
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
        <div className="flex justify-between items-center ml-[150px] mr-[87px] duration-300 ease-linear group border-b-[1px] border-[#363636] pb-8">
          <div className="">
            <div className="flex items-center">
              <li className="list-none text-[#B7B7B7] text-6xl pr-[65px] ">
                01.
              </li>
              <h1 className="text-[#B7B7B7] text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
                Renders
              </h1>
              <span>
                <a href="#">
                  <IoIosArrowRoundUp className="inline-block rotate-45 text-4xl text-[#F7381E] group-hover:rotate-[220deg] p-2 border h-[70px] w-[70px] border-[#F7381E] rounded-full" />
                </a>
              </span>
            </div>
            <div className="hidden group-hover:block pl-[145px]">
              <p className="text-[#DBDBDB80] text-[28px] w-[677px] font-helvetica font-normal leading-[43px] pt-12 pb-[70px]">
                If a brand does not already have 3D models, using AI and bespoke
                touch ups, we can transform 2D images into polygon 3D models
                with high quality renders in a matter of hours.
              </p>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">Hyper Realism</button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-5">3D Model</button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">Animation</button>
            </div>
          </div>

          <div className="w-[356px] h-[326px] relative z-10">
            <video
              src={braided}
              ref={videoRefone}
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
        <div className="flex justify-between m-auto mt-[70px] mb-[70px] items-center duration-300 ease-linear group ml-[150px] mr-[87px] border-b-[1px] border-[#363636] pb-8">
          <div className="">
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
            <div className="hidden group-hover:block pl-[145px]">
              <p className="text-[#DBDBDB80] text-[28px] w-[677px] font-helvetica font-normal leading-[43px] pt-12 pb-[70px]">
              Showcase X offers a variety of experiential features in addition to AR product display, with options like virtual try on, real time colour ways, and screen capture all available.
              </p>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">AR Display</button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-5">Virtual Try on</button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">Screen Capture</button>
            </div>
          </div>
          <div className="w-[356px] h-[326px] relative z-10">
            <video
              src={pink}
              ref={videoReftwo}
              id="myVideo"
              controls
              muted
              onClick={handleVideoTwoClick}
              className="w-full h-full"
            ></video>
            {!isOpenTwo && (
              <span
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleVideoTwoClick}
              >
                <FaPlayCircle className="text-white text-3xl" />
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between m-auto items-center  ml-[150px] mr-[87px] duration-300 ease-linear group border-b-[1px] border-[#363636] pb-8">
         <div className="">
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
          <div className="hidden group-hover:block pl-[145px]">
              <p className="text-[#DBDBDB80] text-[28px] w-[677px] font-helvetica font-normal leading-[43px] pt-12 pb-[70px]">
              Showcase X deploys on e-commerce setups via app hosting activated by scanning a QR code on a product page, or by direct WebAR integration for larger sized brands.
              </p>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">App</button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-5">Direct Integration</button>
            </div>

         </div>
          <div className="w-[356px] h-[326px] relative z-10">
            <video
              src={trench}
              ref={videoRefthree}
              id="myVideo"
              controls
              muted
              onClick={handleVideoThreeClick}
              className="w-full h-full"
            ></video>
            {!isOpenThree && (
              <span
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleVideoThreeClick}
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
