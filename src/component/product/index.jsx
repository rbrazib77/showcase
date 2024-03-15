import React from "react";
import img1 from "../../assets/images/product/product.png";
import p1 from "../../assets/images/product/p1.webp";
import product1 from "../../assets/images/product/product1.png";
import p_shap from "../../assets/images/product/p-shap.png";
import circle from "../../assets/images/product/circle.png";
import f1 from "../../assets/images/f1.png";
import f3 from "../../assets/images/f3.png";
import f2 from "../../assets/images/f2.png";

export default function Product() {
  return (
    <>
      <section className="bg-black relative py-8 md:py-40 lg:py-40 xl:py-40 2xl:py-40">
        <span className="absolute top-24 right-0 hidden lg:block xl:block 2xl:block md:block">
          <img src={p_shap} alt="" />
        </span>
        <div className="px-[20px] lg:px-[100px] md:px-[100px] xl:px-[100px] 2xl:px-[100px]">
          <div className="md:flex lg:flex xl:flex 2xl:flex md:flex-wrap-reverse lg:flex-wrap-reverse xl:flex-wrap-reverse 2xl:flex-wrap-reverse flex-row-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center">
            <div className="lg:w-1/2">
              <div className="txt-box">
                <h4 className="font-helvetica max-w-[250px] lg:max-w-[741px] md:max-w-[741px] xl:max-w-[741px] 2xl:max-w-[741px] lg:pr-5 font-medium leading-[124%]  text-[28px]  md:text-[62px] lg:text-[62px] xl:text-[80px] 2xl:text-[80px] text-white md:leading-[80px] lg:leading-[80px] xl:leading-[80px] 2xl:leading-[80px]">
                  The
                  <span className="font-artusiG font-normal italic">
                    {" "}
                    problem{" "}
                  </span>{" "}
                  of 2D
                  <span className="font-artusiG font-normal italic ">
                    {" "}
                    E-Commerce product
                  </span>{" "}
                  displays.
                </h4>
                <button className="bg-[#191919] text-[#F7381E] px-3 md:p-5 lg:p-5 xl:p-5 2xl:p-5 font-helvetica font-bold mt-[30px] mb-5 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 md:mt-[123px] lg:mt-[123px] xl:mt-[123px] 2xl:mt-[123px] leading-[40px] rounded-[16px] text-[18px] md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                  2D Experience
                </button>
                <h6 className="w-[400px] md:w-[702px] lg:w-[702px] xl:w-[702px] 2xl:w-[702px] font-helvetica font-light text-base lg:text-[26px] xl:text-[26px] 2xl:text-[26px] lg:mt-12 md:mt-10 text-[#E0DBCE] leading-[140%] md:leading-[151%] lg:leading-[151%] xl:leading-[151%] 2xl:leading-[151%] pl-5 md:pl-14 lg:pl-14 xl:pl-14 2xl:pl-14 pr-20 relative after:w-3 md:after:w-10 lg:after:w-10 xl:after:w-10 2xl:after:w-10  after:h-5 md:after:h-16 lg:after:h-16 xl:after:h-16 2xl:after:h-16 after:absolute after:content after:rounded-br-[100%] after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  after:to-[#EB032D] after:left-0 after:top-2 after:to-[112%] after:from-[-26%] after:from-[#000000] ">
                  The next generation of fashion consumer demands more social,
                  immersive and experiential touchpoints with their favorite
                  fashion brands and products.
                </h6>
              </div>
            </div>
            <div className="lg:w-1/2  block md:hidden mt-8 lg:hidden xl:hidden 2xl:hidden">
              <div className="img-box">
                <picture>
                  <img
                    className="ml-auto  block md:w-auto "
                    src={img1}
                    alt={img1}
                  />
                </picture>
              </div>
            </div>
            <div className="lg:w-1/2 hidden md:block lg:block xl:block 2xl:block ">
              <div className="img-box">
                <picture>
                  <img
                    className="ml-auto  block md:w-auto "
                    src={img1}
                    alt={img1}
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="lg:flex mt-12 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20">
            <div className="lg:w-1/2 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 hidden md:block lg:block xl:block 2xl:block">
              <div className="img-box ">
                <div className="slider-box">
                  <picture>
                    <img
                      className="m-auto block w-full md:max-w-xl"
                      src={product1}
                      alt={p1}
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="details-box">
                <div className="slider-box">
                  <div className="details text-right">
                    <h4 className="font-helvetica text-right font-medium text-[28px] pl-20 sm:pl-0 lg:text-[58px] md:text-[62px] xl:text-[58px] 2xl:text-[80px] text-white leading-[124%] lg:leading-[86px] md:leading-[86px] xl:leading-[86px] 2xl:leading-[86px]">
                      {" "}
                      This is the
                      <span className="font-artusiG italic">
                        {" "}
                        Immersive
                      </span>{" "}
                      Product{" "}
                      <span className="font-artusiG italic ">
                        {" "}
                        Experience
                      </span>{" "}
                      Solution
                    </h4>
                    <button className="bg-[#191919] text-[#F7381E] px-3 md:p-5 lg:p-5 xl:p-5 2xl:p-5 font-helvetica  font-bold mb-5 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 mt-[30px] md:mt-[123px] lg:mt-[123px] xl:mt-[123px] 2xl:mt-[123px] rounded-[16px] leading-[40px] text-[18px] md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                      3D Experience
                    </button>
                    <h6 className="font-helvetica text-left md:text-right lg:text-right xl:text-right 2xl:text-right text-[16px] md:text-[26px] lg:text-[26px] xl:text-[26px] 2xl:text-[26px] font-light pl-3 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 lg:mt-12 md:mt-10 text-[#E0DBCE] leading-[151$] md:leading-[39px] lg:leading-[39px] xl:leading-[39px] 2xl:leading-[39px] pr-5 md:pr-16 lg:pr-16 xl:pr-16 2xl:pr-16 relative before:w-3 md:before:w-10 lg:before:w-10 xl:before:w-10 2xl:before:w-10 before:h-5 md:before:h-16 lg:before:h-16 xl:before:h-16 2xl:before:h-16 before:absolute before:content before:rounded-bl-[100%] before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  before:to-highlight before:right-0 before:top-2 before:to-[112%] before:from-[-26%] before:from-[#000000]">
                      Harnessing proprietary 4K HDR augmented reality, we
                      empower brands and retailers to display e-commerce
                      products as 3D immersive experiences, layered over real
                      life.
                      <span className="font-artusi italic">
                        products as
                      </span>{" "}
                      static 2D images:
                    </h6>
                    <div className="features mt-6 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
                      <div className="flex justify-between gap-10">
                        <div className="w-1/3 text-left md:pl-10 lg:pl-10 xl:pl-10 2xl:pl-10">
                          <picture>
                            <img className="w-full" src={f1} />
                          </picture>
                          <h5 className="text-[#FFFFFF] mt-3 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 leading-[151%] sm:leading-[151%] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-helvetica  font-thin">
                            Immersive
                          </h5>
                          <span className="font-artusiG font-normal italic text-2xl text-[#FFFFFF]">
                            {" "}
                            Display
                          </span>
                        </div>
                        <div className="w-1/3 text-left md:pl-10 lg:pl-10 xl:pl-10 2xl:pl-10">
                          <picture>
                            <img className="w-full" src={f3} />
                          </picture>
                          <h5 className="text-[#FFFFFF] mt-3 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 leading-[151%] sm:leading-[151%] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-helvetica  font-thin ">
                            4K HDR
                          </h5>
                          <span className="font-artusiG font-normal italic text-2xl text-[#FFFFFF]">
                            {" "}
                            Augmented
                          </span>
                          <h5 className="font-artusiG font-normal italic text-2xl text-[#FFFFFF]">
                            Reality
                          </h5>
                        </div>
                        <div className="w-1/3 text-left md:pl-10 lg:pl-10 xl:pl-10 2xl:pl-10">
                          <picture>
                            <img className="w-full" src={f2} />
                          </picture>
                          <h5 className="text-[#FFFFFF] mt-3 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 leading-[151%] sm:leading-[151%] text-sm md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-helvetica  font-thin">
                            Virtual{" "}
                            <span className="font-artusiG font-normal italic text-2xl text-[#FFFFFF]">
                              Try
                            </span>
                          </h5>
                          <span className="font-artusiG font-normal italic text-2xl text-[#FFFFFF]">
                            {" "}
                            On
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 mt-6 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 block lg:hidden md:hidden xl:hidden 2xl:hidden">
                      <div className="img-box ">
                        <div className="slider-box">
                          <picture>
                            <img
                              className="m-auto block w-full md:max-w-xl"
                              src={product1}
                              alt={p1}
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
