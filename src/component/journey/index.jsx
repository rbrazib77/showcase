import React, { useRef, useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import stage from '../../assets/video/black.webm'
const index = () => {
    const [isOpen, setOpen] = useState(false);
    const videoRef = useRef(null);

    const handleVideoClick = () => {
      const video = videoRef.current;

      if (video.paused) {
        video.play();
        setOpen(!isOpen)
      } else {
        video.pause();
        setOpen(!isOpen)

      }
    };
  return (
    <section className="bg-black">
      <div className="container">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium pt-24 leading-[141%] pb-6 text-center text-6xl ">
          Our journey <span className="text-[#F7381E] italic">So Far</span>
        </h2>
        <p className="text-[#C0C0C0] text-center px-[130px] font-medium font-helvetica pb-32 pt-6 text-2xl w-[1075px]  leading-[141%]  relative left-[50%] translate-x-[-50%]">
        Recently seen at MIDO, MICAM, London Fashion Week and Milan Fashion Week. Here on Class Moda TV -
        </p>

        <div className="cus-container relative z-10">
             <video src={stage} ref={videoRef} id="myVideo" controls muted onClick={handleVideoClick} className='w-full h-full'></video>  
             {!isOpen &&
             <span className='absolute top-1/2 left-1/2 cursor-pointer' onClick={handleVideoClick}><FaPlayCircle  className='text-white text-6xl'/></span>     
            } 
        </div>
      </div>
    </section>
  );
};

export default index;
