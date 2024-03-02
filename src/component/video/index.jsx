import React, { useRef, useState } from 'react'
import logo from '../../assets/images/flogo.png'
import textlogo from '../../assets/images/textLogo.png'
import { FaPlayCircle } from "react-icons/fa";
import ModalVideo from 'react-modal-video';
import video from '../../assets/video/showcase.webm'
import stage from '../../assets/video/black.webm'
import VideoPlayer from "react-background-video-player";


export default function Video() {
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
    <>
    <section className='bg-black py-10'>
        <div className="cus-container relative z-10">
             <video src={stage} ref={videoRef} id="myVideo" controls muted onClick={handleVideoClick} className='w-full h-full'></video>  
             {!isOpen &&
             <span className='absolute top-1/2 left-1/2 cursor-pointer' onClick={handleVideoClick}><FaPlayCircle  className='text-white text-6xl'/></span>     
            } 
            
            {/* <div className="flex justify-between items-center">
                <div className="the font-helvetica font-medium text-sm   lg:text-[32px]   xl:text-[42px] 2xl:text-[42px] py-2 lg:py-6 text-highlight border-[1px] rounded-[100%] px-10 lg:px-20 border-white/20">THE</div>
                <div className="the font-artusi italic font-medium text-xl md:text-[62px] lg:text-[82px] xl:text-[114px] 2xl:text-[132px] text-white stroke">World</div>
                <div className="the font-helvetica  font-medium text-xl md:text-[62px] lg:text-[82px]   xl:text-[114px] 2xl:text-[132px] text-white stroke">is</div>
                <div className="the font-helvetica  font-medium text-xl md:text-[62px] lg:text-[82px]   xl:text-[114px] 2xl:text-[132px] text-white stroke">a</div>
                <div className="the font-helvetica  font-medium text-xl md:text-[62px] lg:text-[82px]   xl:text-[114px] 2xl:text-[132px] text-white stroke"> <span className='w-5 lg:w-14 h-5 lg:h-20 border-[1px] border-highlight rounded-br-[100%] inline-block'></span> stage <span className='w-5 lg:w-14 h-5 lg:h-20 border-[1px] border-highlight rounded-bl-[100%] inline-block'></span></div>
            </div>
            <div className="flex justify-between items-center pt-10 lg:pt-24">
                <div className="the font-helvetica font-medium text-xl lg:text-[32px] xl:text-[42px] text-highlight border-[1px] rounded-[50px] py-2 lg:py-6 px-4 lg:px-10 border-white/20">Where</div>
                <div className="the font-artusi italic font-medium text-2xl md:text-[62px] lg:text-[82px]   xl:text-[114px] 2xl:text-[132px] text-white stroke">showcase <sup>X</sup></div>
                <div className=""><picture><img className='w-10 lg:w-24 lg:h-24' src={logo} alt={logo} /></picture></div>
            </div>
            <div className="flex justify-between items-center pt-10 lg:pt-24">
            <div> <span className='w-4 lg:w-6 h-10 lg:h-20 border-[1px]  lg:mr-4 xl:mr-10 border-highlight rounded-br-[100%] inline-block'></span> <span className='w-6 lg:w-10 h-10 lg:h-20 border-[1px] border-highlight rounded-br-[100%] inline-block'></span></div>
                <div className="the font-helvetica font-medium text-sm lg:text-[32px] xl:text-[42px] text-highlight border-[1px] rounded-[100%] py-2 lg:py-10 px-4 lg:px-20 border-white/20">E-commerce</div>
                <div > <span className='w-4 lg:w-8 h-10 lg:h-20 lg:mr-4 xl:mr-10 border-[1px] border-highlight rounded-br-[100%] inline-block'></span> <span className='w-4 lg:w-14 h-10 lg:h-20 border-[1px] border-highlight rounded-br-[100%] inline-block'></span></div>

                <ModalVideo
				channel="custom"
				url={video}
                allowFullScreen='true'
				isOpen={isOpen}
				videoId={video}
				onClose={() => setOpen(false)} />
                <div className=""><FaPlayCircle onClick={() => setOpen(true)} className='text-white text-4xl lg:text-8xl'/></div>
                <div> <span className='w-6 lg:w-14 h-10 lg:h-20 lg:mr-4 xl:mr-10 border-[1px] border-highlight rounded-br-[100%] inline-block'></span> <span className='w-6 lg:w-14 h-10 lg:h-20 border-[1px] border-highlight rounded-bl-[100%] inline-block'></span></div>
                <div><span className='w-6 lg:w-14 h-10 lg:h-20  lg:mr-4 xl:mr-10 border-[1px] border-highlight rounded-bl-[100%] inline-block'></span> <span className='w-6 lg:w-10 h-10 lg:h-20 border-[1px] border-highlight rounded-bl-[100%] inline-block'></span></div>
                <div><span className='w-6 lg:w-10 h-10 lg:h-20  lg:mr-4 xl:mr-10 border-[1px] border-highlight rounded-bl-[100%] inline-block'></span> <span className='w-6 h-10 lg:h-20 border-[1px] border-highlight rounded-bl-[100%] inline-block'></span></div>
            </div>
            <div className="flex justify-between items-center pt-10 lg:pt-24">
                <div className="the font-helvetica font-medium text-2xl md:text-[62px] lg:text-[82px]   xl:text-[114px] 2xl:text-[132px] text-white stroke">fashion <span className='font-artusi italic'>products</span></div>
                <div className="the font-helvetica font-medium text-base lg:text-[32px] xl:text-[42px] text-highlight border-[1px] rounded-[50px] px-10 py-2 lg:py-6 border-white/20">Should</div>
            </div>
            <div className="flex justify-between items-center pt-10 lg:pt-24">
                <div className="the font-helvetica font-medium text-base lg:text-[32px] xl:text-[42px] text-highlight border-[1px] rounded-[50px] px-10 border-white/20 bg-white/5 py-2 lg:py-6 backdrop-blur-md"><a href="#">Also</a></div>
                <div className="the font-helvetica font-medium text-2xl md:text-[62px] lg:text-[82px]   xl:text-[114px] 2xl:text-[132px] text-white stroke">fashion <span className='font-artusi italic'>Perform</span></div>
                <div><span className='w-20 lg:w-44 h-10 lg:h-20 lg:mr-4 xl:mr-10 border-[1px] border-highlight rounded-[100%] inline-block'></span></div>
                <div className='w-10 lg:w-20 overflow-hidden'><span className='w-20 lg:w-44 h-10 lg:h-20 lg:mr-4 xl:mr-10 border-[1px] border-highlight rounded-[100%] inline-block'></span></div>
            </div>
            <div className="logo absolute left-10 bottom-0 z-[-1]">
                <picture>
                    <img className='w-52' src={textlogo} alt={textlogo} />
                </picture>
            </div> */}
            {/* <VideoPlayer
            className="video"
            src={stage}
            autoPlay={false}
            muted={true}
        /> */}
        </div>
           
    </section>

    </>
  )
}
