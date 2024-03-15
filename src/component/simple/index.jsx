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
    <section className="bg-black pb-[60px] md:pb-[440px] lg:pb-[440px] xl:pb-[440px] 2xl:pb-[440px]">
      <div>
        <div className="">
          <h2 className="text-[28px] md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#FFFFFF] leading-[120%] text-center font-medium pb-5 pt-10 md:pt-[153px] lg:pt-[153px] xl:pt-[153px] 2xl:pt-[153px]">
            In 3 <span className="text-[#F7381E] italic">Simple</span> Steps
          </h2>
          <p className="text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] px-[70px] md:px-[30px] lg:px-[30px] xl:px-[30px] 2xl:px-[30px] text-[#C0C0C0] text-center m-auto max-w-[700px] leading-[138%] font-helvetica font-medium pb-[38px] md:pb-[237px] lg:pb-[237px] xl:pb-[237px] 2xl:pb-[237px]">
            Taking just a few days,we take 2D static e-commerce product images
            and propel them into their immersive 3D form, displayed in real time
            augmented reality.
          </p>
        </div>
        <div className="md:flex lg:flex xl:flex 2xl:flex justify-between items-center ml-[20px]  md:ml-[150px] lg:ml-[150px] xl:ml-[150px] 2xl:ml-[150px]  mr-[20px] md:mr-[87px] lg:mr-[87px] xl:mr-[87px] 2xl:mr-[87px] duration-300 ease-linear group border-b-[1px] border-[#363636] pb-8">
          <div className="">
            <div className="flex items-center">
              <li className="list-none text-[#B7B7B7] text-2xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl pr-[12px] md:pr-[65px] lg:pr-[65px] xl:pr-[65px] 2xl:pr-[65px]">
                01.
              </li>
              <h1 className="text-[#B7B7B7] text-[32px] md:text-[100px] lg:text-[100px] xl:text-[100px] 2xl:text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
                Renders
              </h1>
              <span>
                <a href="#">
                  <IoIosArrowRoundUp className="inline-block rotate-45 text-xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#F7381E] group-hover:rotate-[220deg]  md:p-2 lg:p-2 xl:p-2 2xl:p-2 border h-[28px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] w-[28px] md:w-[70px] xl:w-[70px] 2xl:w-[70px] border-[#F7381E] rounded-full" />
                </a>
              </span>
            </div>
            <div className="hidden group-hover:block md:pl-[145px] lg:pl-[145px] xl:pl-[145px] 2xl:pl-[145px]">
              <p className="text-[#DBDBDB80] text-[18px] md:text-[28px] lg:text-[28px] xl:text-[28px] 2xl:text-[28px] w-[320px] md:w-[677px] lg:w-[677px] xl:w-[677px] 2xl:w-[677px] font-helvetica font-normal leading-[151%] md:leading-[43px] lg:leading-[43px] xl:leading-[43px] 2xl:leading-[43px] pt-8 md:pt-12 lg:pt-12 xl:pt-12 2xl:pt-12 pb-[40px] md:pb-[70px] lg:pb-[70px] xl:pb-[70px] 2xl:pb-[70px]">
                If a brand does not already have 3D models, using AI and bespoke
                touch ups, we can transform 2D images into polygon 3D models
                with high quality renders in a matter of hours.
              </p>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-5 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                Hyper Realism
              </button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-5 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-5">
                3D Model
              </button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-5 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                Animation
              </button>
            </div>
          </div>

          <div className="w-[356px] h-[326px] relative mt-10 sm:mt-0 z-10">
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
        <div className="md:flex lg:flex xl:flex 2xl:flex justify-between items-center ml-[20px]  md:ml-[150px] lg:ml-[150px] xl:ml-[150px] 2xl:ml-[150px] mr-[20px] md:mr-[87px] lg:mr-[87px] xl:mr-[87px] 2xl:mr-[87px] duration-300 ease-linear group border-b-[1px] border-[#363636] mt-8 sm:mt-0  pb-8">
          <div className="">
            <div className="flex items-center">
              <li className="list-none text-[#B7B7B7] text-2xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl pr-[12px] md:pr-[65px] lg:pr-[65px] xl:pr-[65px] 2xl:pr-[65px] ">
                02.
              </li>
              <h1 className="text-[#B7B7B7] text-[32px] md:text-[100px] lg:text-[100px] xl:text-[100px] 2xl:text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
                Experience
              </h1>
              <span>
                <a href="#">
                  <IoIosArrowRoundUp className="inline-block rotate-45 text-xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#F7381E] group-hover:rotate-[220deg] md:p-2 lg:p-2 xl:p-2 2xl:p-2 border h-[28px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] w-[28px] md:w-[70px] xl:w-[70px] 2xl:w-[70px] border-[#F7381E] rounded-full" />
                </a>
              </span>
            </div>
            <div className="hidden group-hover:block md:pl-[145px] lg:pl-[145px] xl:pl-[145px] 2xl:pl-[145px]">
              <p className="text-[#DBDBDB80] text-[18px] md:text-[28px] lg:text-[28px] xl:text-[28px] 2xl:text-[28px] w-[320px] md:w-[677px] lg:w-[677px] xl:w-[677px] 2xl:w-[677px] font-helvetica font-normal leading-[151%] md:leading-[43px] lg:leading-[43px] xl:leading-[43px] 2xl:leading-[43px] pt-8 md:pt-12 lg:pt-12 xl:pt-12 2xl:pt-12 pb-[40px] md:pb-[70px] lg:pb-[70px] xl:pb-[70px] 2xl:pb-[70px]">
                Showcase X offers a variety of experiential features in addition
                to AR product display, with options like virtual try on, real
                time colour ways, and screen capture all available.
              </p>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-4 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                AR Display
              </button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-4 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-5">
                Virtual Try on
              </button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-4 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                Screen Capture
              </button>
            </div>
          </div>
          <div className="w-[356px] h-[326px] mt-10 sm:mt-0 relative z-10">
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
        <div className="md:flex lg:flex xl:flex 2xl:flex justify-between items-center ml-[20px]  md:ml-[150px] lg:ml-[150px] xl:ml-[150px] 2xl:ml-[150px] mr-[20px] md:mr-[87px] lg:mr-[87px] xl:mr-[87px] 2xl:mr-[87px] duration-300 ease-linear group border-b-[1px] border-[#363636] mt-8 sm:mt-0 pb-8">
          <div className="">
            <div className="flex items-center">
              <li className="list-none text-[#B7B7B7] text-2xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl pr-[10px] md:pr-[65px] lg:pr-[65px] xl:pr-[65px] 2xl:pr-[65px] ">
                03.
              </li>
              <h1 className="text-[#B7B7B7] text-[28px] md:text-[100px] lg:text-[100px] xl:text-[100px] 2xl:text-[100px] italic leading-[120%] font-artusiG pr-[32px] ">
                Deployment
              </h1>
              <span>
                <a href="#">
                  <IoIosArrowRoundUp className="inline-block rotate-45 text-xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-[#F7381E] group-hover:rotate-[220deg]  md:p-2 lg:p-2 xl:p-2 2xl:p-2 border h-[28px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] w-[28px] md:w-[70px] xl:w-[70px] 2xl:w-[70px] border-[#F7381E] rounded-full" />
                </a>
              </span>
            </div>
            <div className="hidden group-hover:block md:pl-[145px] lg:pl-[145px] xl:pl-[145px] 2xl:pl-[145px]">
              <p className="text-[#DBDBDB80] text-[18px] md:text-[28px] lg:text-[28px] xl:text-[28px] 2xl:text-[28px] w-[320px] md:w-[677px] lg:w-[677px] xl:w-[677px] 2xl:w-[677px] font-helvetica font-normal leading-[151%] md:leading-[43px] lg:leading-[43px] xl:leading-[43px] 2xl:leading-[43px] pt-8 md:pt-12 lg:pt-12 xl:pt-12 2xl:pt-12 pb-[40px] md:pb-[70px] lg:pb-[70px] xl:pb-[70px] 2xl:pb-[70px]">
                Showcase X deploys on e-commerce setups via app hosting
                activated by scanning a QR code on a product page, or by direct
                WebAR integration for larger sized brands.
              </p>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-4 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                App
              </button>
              <button className="bg-[#FFFFFF10] text-[#FFFFFF] px-4 md:px-8 lg:px-8 xl:px-8 2xl:px-8 py-3 border border-[#4A4A4A] rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear mx-5">
                Direct integration
              </button>
            </div>
          </div>
          <div className="w-[356px] h-[326px] mt-10 sm:mt-0 relative z-10">
            <video
              src={trench}
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
      </div>
    </section>
  );
};

export default index;
