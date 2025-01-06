import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../button";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Menubar() {
  let [closeMenu, setCloseMenu] = useState(false);
  let [show, setShow] = useState(false);
  let [showNav, setShowNav] = useState(false);
  let [dropshow, setDropShow] = useState(false);
  let [upDown, setUpDownShow] = useState(true);
  let [show2, setShow2] = useState(true);
  const location = useLocation();
  console.log(location);
  let handelChang = () => {
    setShow(!show);
  };
  let dropDownhandelChang = () => {
    setDropShow(!dropshow);
  };
  let UpDownhandelChang = () => {
    setUpDownShow(!upDown);
  };
  let navhandelChang = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 1024) {
        setShow2(false);
      } else {
        setShow2(true);
      }
    }
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <>
      <nav className="py-2 md:py-8 absolute top-10 w-full z-[99999]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="md:flex justify-between items-center">
            <div className="inline-block md:w-1/6 ">
              <div className="logo">
                <NavLink to="/">
                  <a href="#">
                    <picture>
                      <img className="w-36 md:w-52" src={logo} alt={logo} />
                    </picture>
                  </a>
                </NavLink>
              </div>
            </div>
            <div className="mobile_menu block lg:hidden xl:hidden md:block 2xl:hidden float-right  cursor-pointer">
              <span>
                <FaBars
                  onClick={navhandelChang}
                  className="text-2xl mr-auto text-white"
                />
              </span>
            </div>

            <div className="duration-300 ease-linear  md:mt-0 md:pt-0 relative md:w-5/6">
              <>
                {/* phone Device */}
                {showNav && (
                  <div
                    className={`${
                      !showNav ? "translate-x-[100%" : "translate-x-0"
                    }block md:hidden lg:hidden xl:hidden 2xl:hidden`}
                  >
                    <div className="md:flex mt-10 justify-end items-center bg-black rounded-lg  md:bg-transparent lg:bg-transparent">
                      <div className="md:w-5/6 md:mt-0 md:pt-0 relative  md:p-0 md:bg-transparent">
                        <div className="menu">
                          <div className="flex pl-4 pr-4 pt-5 justify-between items-center">
                            <div className="w-[142px]">
                              <NavLink to="/">
                              <picture>
                                <img src={logo} alt="" />
                              </picture>
                              </NavLink>
                            </div>
                            <div className="">
                              <span>
                                {!showNav ? (
                                  <FaBars
                                    onClick={navhandelChang}
                                    className="text-2xl mr-auto text-white"
                                  />
                                ) : (
                                  <IoCloseOutline
                                    onClick={navhandelChang}
                                    className="inline text-white text-4xl"
                                  />
                                )}
                              </span>
                            </div>
                          </div>
                          <ul className=" md:space-y-0 mt-8 md:flex justify-center">
                            <NavLink to="/">
                              <li
                                className={`relative ${
                                  location.pathname == "/" &&
                                  "bg-gradient-to-tr from-[#131212e8] to-[#981e35] text-[#F7381E]"
                                } uppercase text-[#C0C0C0] font-helvetica font-bold text-2xl leading-[110%] tracking-[6%] flex justify-between pr-5 pl-4 py-5`}
                              >
                                <a
                                  className="inline-flex items-center gap-2"
                                  href="#"
                                >
                                  {location.pathname == "/" && (
                                    <span className="w-[10px] h-[26px] inline-block bg-[#F7381E] rounded-br-[100%]"></span>
                                  )}
                                  Home
                                  {location.pathname == "/" && (
                                    <span className="w-[10px] h-[26px] inline-block bg-[#F7381E] rounded-bl-[100%]"></span>
                                  )}
                                </a>
                              </li>
                            </NavLink>
                            <NavLink to="/solution">
                              <li
                                className={`relative ${
                                  location.pathname == "/solution" &&
                                  "bg-gradient-to-tr from-[#131212e8] to-[#981e35] text-[#F7381E]"
                                } uppercase text-[#C0C0C0] font-helvetica font-bold text-2xl my-4 leading-[110%] tracking-[6%] flex justify-between pr-5 pl-4 py-5`}
                                onClick={dropDownhandelChang}
                              >
                                <a
                                  className="inline-flex items-center  gap-2"
                                  href="#"
                                >
                                  {location.pathname == "/solution" && (
                                    <span className="w-[10px] h-[26px] inline-block bg-[#F7381E] rounded-br-[100%]"></span>
                                  )}
                                  Solution
                                  {location.pathname == "/solution" && (
                                    <span className="w-[10px] h-[26px] inline-block bg-[#F7381E] rounded-bl-[100%]"></span>
                                  )}
                                </a>

                                <div>
                                  {!upDown ? (
                                    <IoIosArrowDown
                                      className="text-2xl text-white"
                                      onClick={UpDownhandelChang}
                                    />
                                  ) : (
                                    <IoIosArrowUp
                                      className="text-2xl text-white"
                                      onClick={UpDownhandelChang}
                                    />
                                  )}
                                </div>
                              </li>
                            </NavLink>

                            {dropshow && (
                              <div className="">
                                <div className=" bg-[#8D8D8D30]  w-full relative   left-0 ">
                                  <ul className="">
                                    <NavLink to="/solution">
                                      <li className="py-4 pl-4">
                                        <a
                                          href="#"
                                          className="bg-transparent text-[#C0C0C0]  text-xl leading-[110%] tracking-[6%]  font-helvetica font-bold "
                                        >
                                          FEATURES
                                        </a>
                                      </li>
                                    </NavLink>
                                    <NavLink to="/howitworks">
                                      <li className="border-y-2 border-[#FFFFFF10] pl-4  py-4">
                                        <a
                                          href="#"
                                          className=" text-xl leading-[110%] text-[#C0C0C0] tracking-[6%]  font-helvetica font-bold"
                                        >
                                          HOW IT WORKS
                                        </a>
                                      </li>
                                    </NavLink>
                                    <NavLink to="/pricing">
                                      <li className="py-4 pl-4">
                                        <a
                                          href="#"
                                          className=" text-xl leading-[110%] tracking-[6%] text-[#C0C0C0]  font-helvetica font-bold"
                                        >
                                          PRICING
                                        </a>
                                      </li>
                                    </NavLink>
                                  </ul>
                                </div>
                              </div>
                            )}
                            <NavLink to="/about">
                              <li
                                className={`relative ${
                                  location.pathname == "/about" &&
                                  "bg-gradient-to-tr from-[#131212e8] to-[#981e35] text-[#F7381E]"
                                } uppercase text-[#C0C0C0] font-helvetica font-bold text-2xl leading-[110%] tracking-[6%] flex justify-between pr-5 pl-4 py-5`}
                              >
                                <a
                                  className="inline-flex items-center gap-2"
                                  href="#"
                                >
                                  {location.pathname == "/about" && (
                                    <span className="w-[10px] h-[26px] inline-block bg-[#F7381E] rounded-br-[100%]"></span>
                                  )}
                                  About Us
                                  {location.pathname == "/about" && (
                                    <span className="w-[10px] h-[26px] inline-block bg-[#F7381E] rounded-bl-[100%]"></span>
                                  )}
                                </a>
                              </li>
                            </NavLink>
                          </ul>
                        </div>
                      </div>
                      <div className="md:w-1/6 flex justify-center gap-4 pt-40 pb-24 md:pt-0">
                        <div>
                          <NavLink
                            target="_blank"
                            to="https://twitter.com/ShowcaseX_/"
                          >
                            <FaTwitter className="h-10 w-10 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:h-16 2xl:w-16 p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 text-[24px] border border-[#E0DBCE]  rounded-full text-[#FFFFFF] text-center" />
                          </NavLink>
                        </div>
                        <div className=" md:my-7 lg:my-7 xl:my-7 2xl:my-7">
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
                    </div>
                  </div>
                )}
                {/* Destop Version Menubar */}
                <div className="hidden md:block lg:block xl:block 2xl:block">
                  <div className="md:flex justify-end items-center bg-black rounded-lg p-[20px] md:bg-transparent lg:bg-transparent">
                    <div className="md:w-5/6 md:mt-0 md:pt-0 relative  md:p-0 md:bg-transparent">
                      <div className="menu">
                        <ul className="space-y-6 md:space-y-0 flex justify-center">
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "menu_a menu_active" : "menu_a"
                            }
                            to="/"
                          >
                            <li>
                              <a className="" href="/">
                                Home
                              </a>
                            </li>
                          </NavLink>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "menu_a menu_active" : "menu_a"
                            }
                            to="/solution"
                          >
                            <li onClick={handelChang}>
                              <a className="relative" href="#">
                                Solution
                              </a>
                            </li>{" "}
                          </NavLink>
                          {show && (
                            <div className="">
                              <div className="rounded-[25px] bg-[#8D8D8D30] p-2 flex justify-center gap-14 absolute top-16 left-[50%] translate-x-[-50%]">
                                <NavLink
                                  className={({ isActive }) =>
                                    isActive ? "two_menu_active" : ""
                                  }
                                  to="solution"
                                >
                                  <button className="bg-transparent text-white px-6 py-3  rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                                    FEATURES
                                  </button>
                                </NavLink>
                                <NavLink
                                  className={({ isActive }) =>
                                    isActive ? "two_menu_active" : ""
                                  }
                                  to="howitworks"
                                >
                                  <button className="bg-transparent text-white px-6 py-3  rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                                    HOW IT WORKS
                                  </button>
                                </NavLink>
                                <NavLink
                                  className={({ isActive }) =>
                                    isActive ? "two_menu_active" : ""
                                  }
                                  to="/pricing"
                                >
                                  <button className="bg-transparent text-white px-6 py-3 rounded-3xl text-sm font-helvetica font-medium hover:bg-highlight  duration-300 ease-linear">
                                    PRICING
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          )}
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "menu_a menu_active" : "menu_a"
                            }
                            to="/about"
                          >
                            <li>
                              <a className="" href="#">
                                About US
                              </a>
                            </li>
                          </NavLink>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-1/6 text-right pt-10 md:pt-0">
                      <div className="book-btn md:text-right">
                        <Button menu="true" text="Book A Demo" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
