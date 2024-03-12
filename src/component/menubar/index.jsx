import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../button";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Menubar() {
  let [closeMenu, setCloseMenu] = useState(false);
  let [show, setShow] = useState(true);
  let [show2, setShow2] = useState(true);
  let handelChang = () => {
    setShow(!show);
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
        <div className="cus-container">
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
                <RiMenu4Line
                  onClick={() => setShow2(!show2)}
                  className="text-2xl mr-auto text-white"
                />
              </span>
            </div>

            <div
              className={`'duration-300 ease-linear  md:mt-0 md:pt-0 relative md:w-5/6`}
            >
              {show2 && (
               <>
               {/* phone Device */}
               <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="md:flex mt-10 justify-end items-center bg-black rounded-lg p-[20px] md:bg-transparent lg:bg-transparent">
                  <div className="md:w-5/6 md:mt-0 md:pt-0 relative  md:p-0 md:bg-transparent">
                    <div className="menu">
                      <ul className="space-y-6 md:space-y-0 md:flex justify-center">
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
                        <NavLink
                          className={({ isActive }) => isActive ? "menu_a menu_active" : "menu_a"}
                          to="/howitworks"
                        >
                          <li>
                            <a className="" href="/">
                               HOW IT WORKS
                            </a>
                          </li>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "menu_a menu_active" : "menu_a"
                          }
                          to="/pricing"
                        >
                          <li>
                            <a className="" href="/">
                            PRICING
                            </a>
                          </li>
                        </NavLink>
                        {show && (
                          <div className="hidden md:block lg:block xl:block 2xl:block">
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
               <div className="hidden md:block lg:block xl:block 2xl:block">
               <div className="md:flex justify-end items-center bg-black rounded-lg p-[20px] md:bg-transparent lg:bg-transparent">
                  <div className="md:w-5/6 md:mt-0 md:pt-0 relative  md:p-0 md:bg-transparent">
                    <div className="menu">
                      <ul className="space-y-6 md:space-y-0 md:flex justify-center">
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
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
