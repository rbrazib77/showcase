import React from 'react'
import founding from '../../assets/images/founding/founding.png'

const index = () => {
  return (
    <section className='bg-black'>
        <div className='md:cus-container lg:cus-container xl:cus-container 2xl:cus-container'>
        <h2 className="text-[#FFFFFF] font-helvetica font-medium pt-9 leading-[120%] md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 text-center text-[28px] md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl ">Founding <span className='text-[#F7381E] italic'>Team</span></h2>
        <p className="text-[#C0C0C0] text-center px-[10px] md:px-[130px] lg:px-[130px] xl:px-[130px] 2xl:px-[130px] font-medium font-helvetica pb-10 md:pb-20 lg:pb-20 xl:pb-20 2xl:pb-20 pt-6 text-sm md:text-2xl lg:text-2xl 2xl:text-2xl w-[340px]  md:w-[1042px] lg:w-[1042px] xl:w-[1042px] 2xl:w-[1042px]  leading-[138%]  relative left-[50%] translate-x-[-50%]">
        Co-founded by <a  target="_blank" href="https://www.linkedin.com/in/armanatoyan/" className='underline'>Arman Atoyan</a>, with over with 15 years in AR, and <a  target="_blank" href="https://www.linkedin.com/in/charleswilders/" className='underline'>Charles Wilders,</a>digital fashion entrperenur and keynote speaker. Here at Demo day December 2023 - (formerly called OuttaWRLD)
        </p>
        <picture className=''>
          <img src={founding} alt="" />
        </picture> 
        </div>
    </section>
  )
}

export default index