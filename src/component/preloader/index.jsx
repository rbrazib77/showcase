import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png"
import VideoPlayer from "react-background-video-player";
import intro from '../../assets/video/intro.mp4'

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  let [videoPlay,setVideoPlay] = useState(true)
  // let [preloader,setPrelaoder] = useState(true)

 useEffect(() => {
  let interval;
  setTimeout(() => {
    setVideoPlay(false)
    interval = setInterval(() => {
      // Simulating progress increment
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 70);
    
  },2000);

  // setTimeout(()=>{
  //   setPrelaoder(false)
  // },10000)



  return () => clearInterval(interval);
}, []);
  return (
    <>
    {/* {preloader && */}
    <section className='preloader fixed z-[9999998] top-0 left-0 w-screen h-screen bg-black '>
    {!videoPlay ?
    (
      <div className='preloader fixed z-[9999998] top-0 left-0 w-screen h-screen bg-black '>
    <div className="preloader-container">
      <div className="loading-img pb-10">
        <picture>
          <img className='block w-full' src={logo} alt={logo} />
        </picture>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <div className="percent font-helvetica text-3xl font-light text-[#64615D] text-center pt-2" >{progress}%</div>
      </div>
    </div>
    </div>
   
    )
    :
    (
     <div className='hidden lg:block md:block xl:block 2xl:block'>
      <div className="show-bg flex justify-center items-center w-screen h-screen">
         <div className="shape-box w-screen flex -top-10 justify-around relative">
           <div className="shape-one w-[320px] h-[580px]  bg-shape-l-pre rounded-br-[100%]"></div>
           <div className="shape-thre">
             <p className='font-helvetica font-medium text-[150px] text-[#CDE5E1] relative -bottom-40 circle-test'>Showcase <sup>x</sup></p>
             <div className="circle w-72 h-72 bg-shape-circle rounded-[100%] skew-x-[60deg] m-auto rotate-[155deg] relative -bottom-32 scale-50"> </div>
           </div>
           <div className="shape-Three w-[320px] h-[580px] bg-shape-r-pre rounded-bl-[100%]"></div>
         </div>
     </div>
     </div>
    )
     }
     </section>
     
    </>
  )
}
