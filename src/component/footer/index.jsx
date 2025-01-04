import React from "react";
import flogo from "../../assets/images/flogo.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-black py-11 md:py-24 lg:py-24 xl:py-24 2xl:py-24">
        <div className=" xl:px-28 md:px-0">
          <div className="flex flex-wrap pb-10">
            <div className="w-full md:w-2/6 mb-5 md:mb-0 pr-[10%]">
              <div className="f_logo pb-4 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12">
                <a href="#">
                  <picture>
                    <img className="w-20 md:w-32" src={flogo} alt={flogo} />
                  </picture>
                </a>
              </div>
              <p className="font-helvetica w-[295px] font-medium  text-base leading-[28px] text-[#6D6D6D]">
                showcaseX is a registered limited company in England and Wales
                with an operational Italian SRLS subsidiary
              </p>
            </div>
            <div className="w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-1/6">
              <div className="foter_menu">
                <h6 className="font-medium font-helvetica text-[22px] md:mb-6 text-highlight border-b  inline-block border-highlight">
                  Home
                </h6>
                <ul>
                  <li>
                    <a className="f_menu" href="#">
                      ROI
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      What we do
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      Case studies
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      Deployment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-1/6">
              <div className="foter_menu">
                <h6 className="font-medium font-helvetica text-[22px] md:mb-6 text-highlight inline-block border-b border-highlight">
                  Solution
                </h6>
                <ul>
                  <li>
                    <a className="f_menu" href="/solution">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="/howitworks">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="/pricing">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6 2xl:w-1/6">
              <div className="foter_menu">
                <h6 className="font-medium font-helvetica text-[22px] md:mb-6 text-highlight border-b  inline-block border-highlight">
                  About us
                </h6>
                <ul>
                  <li>
                    <a className="f_menu" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      Team and Mission
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      Investors
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      Advisors
                    </a>
                  </li>
                  <li>
                    <a className="f_menu" href="#">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:hidden xl:hidden 2xl:hidden md:hidden flex gap-5">
            <div>
              <NavLink target="_blank" to="https://twitter.com/ShowcaseX_/">
                <FaTwitter className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </NavLink>
            </div>
            <div className="md:my-7 lg:my-7 xl:my-7 2xl:my-7">
              <NavLink
                target="_blank"
                to="https://www.instagram.com/showcasex_/"
              >
                <FaInstagram className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </NavLink>
            </div>
            <div>
              <NavLink
                target="_blank"
                to="https://www.linkedin.com/company/showcasex/?viewAsMember=true"
              >
                <FaLinkedin className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
              </NavLink>
            </div>
          </div>
          <div className="praivicy border-t  mt-10 md:mt-0 border-[#B3B3B3]">
            <div className="flex justify-between">
              <a
                className="font-helvetica text-base font-medium text-[#787878] border-b border-[#787878] inline-block"
                href="#"
              >
                Privacy Policy Cookies
              </a>
              <a
                className="font-helvetica text-base font-medium text-[#787878] border-b border-[#787878] inline-block"
                href="#"
              >
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
