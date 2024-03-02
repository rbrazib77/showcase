import React from 'react'
import flogo from '../../assets/images/flogo.png'

export default function Footer() {
  return (
    <>
     <footer className='bg-black py-24'>
        <div className=" xl:px-28 md:px-0">
            <div className="flex flex-wrap pb-10">
                <div className="w-full md:w-2/6 mb-5 md:mb-0 pr-[10%]">
                    <div className="f_logo pb-12">
                        <a href="#">
                            <picture>
                                <img className='w-20 md:w-32' src={flogo} alt={flogo} />
                            </picture>
                        </a>
                    </div>
                    <p className='font-helvetica font-medium text-xl leading-[28px] text-[#6D6D6D]'>showcaseX is a registered limited company in England and Wales with an operational Italian SRLS subsidiary</p>
                </div>
                <div className="w-1/2 md:w-1/6">
                    <div className="foter_menu">
                        <h6 className="font-medium font-helvetica text-[22px] md:mb-6 text-highlight border-b  inline-block border-highlight">Home</h6>
                        <ul>
                            <li><a className='f_menu' href="#">ROI</a></li>
                            <li><a className='f_menu' href="#">What we do</a></li>
                            <li><a className='f_menu' href="#">Case studies</a></li>
                            <li><a className='f_menu' href="#">Deployment</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 md:w-1/6">
                <div className="foter_menu">
                        <h6 className="font-medium font-helvetica text-[22px] md:mb-6 text-highlight inline-block border-b border-highlight">Solution</h6>
                        <ul>
                            <li><a className='f_menu' href="#">Features</a></li>
                            <li><a className='f_menu' href="#">How it works</a></li>
                            <li><a className='f_menu' href="#">Pricing</a></li>
                        </ul>
                    </div>
                </div>
       
                <div className="w-1/2 md:w-1/6">
                <div className="foter_menu">
                        <h6 className="font-medium font-helvetica text-[22px] md:mb-6 text-highlight border-b  inline-block border-highlight">About us</h6>
                        <ul>
                            <li><a className='f_menu' href="#">News</a></li>
                            <li><a className='f_menu' href="#">Team and Mission</a></li>
                            <li><a className='f_menu' href="#">Investors</a></li>
                            <li><a className='f_menu' href="#">Advisors</a></li>
                            <li><a className='f_menu' href="#">Partners</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="praivicy border-t  mt-10 md:mt-0 border-[#B3B3B3]">
                <div className="flex justify-between">
                    <a className='font-helvetica text-base font-medium text-[#787878] border-b border-[#787878] inline-block' href='#'>Privacy Policy Cookies</a>
                    <a className='font-helvetica text-base font-medium text-[#787878] border-b border-[#787878] inline-block' href="#">Terms & Condition</a>
                </div>
            </div>
        </div>
     </footer>
    </>
  )
}
