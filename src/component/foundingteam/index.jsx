import React from 'react'
import founding from '../../assets/images/founding/founding.png'

const index = () => {
  return (
    <section className='bg-black'>
        <div className='cus-container'>
        <h2 className="text-[#FFFFFF] font-helvetica font-medium pt-9 leading-[120%] pb-6 text-center text-6xl ">Founding <span className='text-[#F7381E] italic'>Team</span></h2>
        <p className="text-[#C0C0C0] text-center px-[130px] font-medium font-helvetica pb-20 pt-6 text-2xl w-[1042px]  leading-[141%]  relative left-[50%] translate-x-[-50%]">
        Co-founded by <a  target="_blank" href="https://www.linkedin.com/in/armanatoyan/" className='underline'>Arman Atoyan</a>, with over with 15 years in AR, and <a  target="_blank" href="https://www.linkedin.com/in/charleswilders/" className='underline'>Charles Wilders,</a>digital fashion entrperenur and keynote speaker. Here at Demo day December 2023 - (formerly called OuttaWRLD)
        </p>
        <picture>
          <img src={founding} alt="" />
        </picture> 
        </div>
    </section>
  )
}

export default index