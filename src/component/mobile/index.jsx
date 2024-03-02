import React from 'react'
import circle from '../../assets/images/mobile/circle.png'
import small_logo from '../../assets/images/mobile/c_icon.png'
import leftMble from '../../assets/images/mobile/lmobile.webp'
import rightMble from '../../assets/images/mobile/mock.png'
import left from '../../assets/images/mobile/left.png'
import right from '../../assets/images/mobile/right.png'
import VideoPlayer from "react-background-video-player";
import v1 from '../../assets/video/mobile/m.mp4'
export default function Mobile() {
  return (
    <>
      <section className='bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] overrflow-x-hidden to-black  to-[52%] from-[0%] from-[#303030] py-20 md:py-32 md:pt-64 mobile-section'>
        <div className="container px-6 md:px-0 relative">
          <div className="circle w-24 md:w-40 lg:w-52 absolute -top-14 md:-top-36 left-2 md:left-auto md:!right-10  lg:!right-24">
            <picture className=''>
            <img className="w-24 md:w-40 lg:w-52 absolute top-full left-1/2 -translate-x-1/2 -translate-y-0 circleAnimation" src={circle} alt={circle} />
            </picture>
            <picture className=''>
              <img className='absolute -top-full left-[80%] -translate-x-0 translate-y-[90%]' src={small_logo} alt={small_logo} />
            </picture>
          </div>
         
          <div className="content lg:flex justify-between">
            <div className=" left lg:w-3/6">
              <div className="flex">
                <div>
                <div className="text w-max h-max bg-[#FFFFFF20] p-5 mt-96 rounded-2xl">
                    <h3 className='text-highlight text-xl md:text-4xl font-helvetica font-medium'>2D Experience</h3>
                </div>
                <p className='text-[#E0DBCE] max-w-44 md:max-w-96 font-helvetica font-bold text-lg md:text-2xl leading-[34px] pt-10'><span className='font-artusi italic font-thin'>Harnessing</span> proprietary 4K HDR augmented reality, we empower fashion brands and retailers to display digital products.</p>
                </div>
                <div className={`img w-3/6 pl-2 md:pl-40 lg:pl-0 xl:pl-0 relative`}>
                  <span className='absolute -left-44 md:-left-24 lg:-left-64  top-20' ><img src={left} alt={left} /></span>
                  <picture>
                      <img className='w-auto max-w-xs  lg:max-w-[222px] xl:max-w-[222px] 2xl:max-w-xs block m-auto' src={leftMble} alt={leftMble} />
                  </picture>
                </div>
              </div>
            </div>
            
          
            <div className="lg:w-3/6">
                <div className="md:flex">
                <div className={`img w-4/6 pl-10 -left-48 md:left-0 relative`} >
                    <span className='absolute -right-[110%] md:-right-2/3 top-2/3 md:top-32' ><img src={right} alt={right} /></span>
                    <picture>
                        <img className='w-auto max-w-xs lg:max-w-[222px] xl:max-w-[222px] 2xl:max-w-xs  block m-auto' src={rightMble} alt={rightMble} />
                    </picture>
                    <div className="bg w-[74%] max-w-xs lg:max-w-[222px] xl:max-w-[222px] 2xl:max-w-xs h-[620px] absolute top-4 right-8 rounded-[42px] block m-auto z-10 bg-red-200">

                    <VideoPlayer
                    className="video !left-0 h-40 rounded-[50px]"
                    src={v1}
                    autoPlay={true}
                    muted={true}
                    />
                    </div>
                </div>
                <div className="right">
                  <div className="text w-max h-max bg-[#FFFFFF20] p-5 ml-auto md:m-auto md:mt-96 rounded-2xl">
                      <h3 className='text-highlight text-xl md:text-4xl font-helvetica font-medium'>3D Experience</h3>
                  </div>
                  <p className='text-[#E0DBCE] text-right w-[352px] md:w-[372px] lg:w-[280px] xl:w-[372px] md:ml-auto lg:mr-auto xl:ml-auto font-helvetica font-bold text-lg md:text-2xl leading-[34px] pt-10'><span className='font-artusi italic font-thin'>Not just as</span> flat 2D pictures on white backgrounds, but as immersive and experiential 3D <span className='font-artusi italic font-thin'>augmented reality</span>  experiences.</p>
                </div>
                </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
