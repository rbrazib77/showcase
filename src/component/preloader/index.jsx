import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png"
import VideoPlayer from "react-background-video-player";
import intro from '../../assets/video/intro.mp4'

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  let [videoPlay,setVideoPlay] = useState(false)
  let [preloader,setPrelaoder] = useState(true)

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
    }, 100);
    
  },);
  setTimeout(()=>{
    setPrelaoder(false)
  },10000)


  return () => clearInterval(interval);
}, []);
  return (
    <>
    {preloader &&
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
      <div className="video absolute top-0 left-0 w-screen h-screen z-[9999999]">
        <VideoPlayer
            className="video"
            src={intro}
            autoPlay={true}
            muted={true}
        />
    </div>
    )
     }
     </section>
     }
    </>
  )
}
