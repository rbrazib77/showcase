import React from "react";
import img1 from "../../assets/images/product/product.png";
import p1 from "../../assets/images/product/p1.webp";
import product1 from "../../assets/images/product/product1.png";
import circle from "../../assets/images/product/circle.png";
import f1 from "../../assets/images/f1.png";
import f3 from "../../assets/images/f3.png";
import f2 from "../../assets/images/f2.png";

export default function Product() {
  return (
    <>
      <section className="bg-black py-40">
        <div className="pl-[100px] pr-[78px] px-6 md:px-0">
          <div className="flex flex-wrap-reverse flex-row-reverse lg:flex-row justify-between items-center">
            <div className="lg:w-1/2">
              <div className="txt-box">
                <h4 className="font-helvetica lg:max-w-[741px] lg:pr-5 font-medium leading-[100%] text-[42px]  md:text-[62px] lg:text-[62px] xl:text-[80px] text-white md:leading-[80px]">
                  The
                  <span className="font-artusi font-thin italic">
                    {" "}
                    problem{" "}
                  </span>{" "}
                  of 2D
                  <span className="font-artusi font-thin italic ">
                    {" "}
                    E-Commerce product
                  </span>{" "}
                  displays.
                </h4>
                <button className="bg-[#191919] text-[#F7381E] p-5 font-helvetica font-medium mt-[123px] rounded-[16px] text-4xl">
                  2D Experience
                </button>
                <h6 className="font-helvetica font-medium xl:text-[26px] lg:mt-12 md:mt-10 text-[#E0DBCE] leading-[151%] pl-14 pr-20 relative after:w-10 after:h-16 after:absolute after:content after:rounded-br-[100%] after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  after:to-highlight after:left-0 after:top-3 after:to-[112%] after:from-[-26%] after:from-[#000000] ">
                  The next generation of fashion consumer demands more social,
                  immersive and experiential touchpoints with their favorite
                  fashion brands and products.
                </h6>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="img-box">
                <picture>
                  <img className="ml-auto block w-auto" src={img1} alt={img1} />
                </picture>
              </div>
            </div>
          </div>
          <div className="lg:flex mt-20">
            <div className="lg:w-1/2 pt-40">
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
                    <h4 className="font-helvetica text-right font-medium lg:text-[58px] md:text-[62px] xl:text-[58px] text-white leading-[80px]">
                      {" "}
                      This is the
                      <span className="font-artusi italic">
                        {" "}
                        Immersive
                      </span>{" "}
                      Product{" "}
                      <span className="font-artusi italic ">
                        {" "}
                        Experience
                      </span>{" "}
                      Solution
                    </h4>
                    <button className="bg-[#191919] text-[#F7381E] p-5 font-helvetica font-medium mt-[102px] rounded-[16px]  text-4xl">
                      3D Experience
                    </button>
                    <h6 className="font-helvetica font-medium xl:text-[26px] lg:text-base xl:text-3xl lg:mt-12 md:mt-10 text-[#E0DBCE] leading-[52px] pr-16 relative before:w-10 before:h-16 before:absolute before:content before:rounded-bl-[100%] before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  before:to-highlight before:right-0 before:top-3 before:to-[112%] before:from-[-26%] before:from-[#000000]">
                      Harnessing proprietary 4K HDR augmented reality, we
                      empower brands and retailers to display e-commerce
                      products as 3D immersive experiences, layered over real
                      life.
                      <span className="font-artusi italic">
                        products as
                      </span>{" "}
                      static 2D images:
                    </h6>

                    <div className="features mt-16">
                      <div className="flex justify-start">
                        <div className="w-1/3 text-left pl-10">
                          <picture>
                            <img className="w-full" src={f1} />
                          </picture>
                          <h5 className="text-[#FFFFFF] mt-6 text-2xl font-helvetica font-medium">
                            Immersive
                          </h5>
                          <span className="font-artusi italic text-2xl text-[#FFFFFF]">
                            {" "}
                            Display
                          </span>
                        </div>
                        <div className="w-1/3 text-left pl-10">
                          <picture>
                            <img className="w-full" src={f3} />
                          </picture>
                          <h5 className="text-[#FFFFFF] mt-6 text-2xl font-helvetica font-medium">
                            Immersive
                          </h5>
                          <span className="font-artusi italic text-2xl text-[#FFFFFF]">
                            {" "}
                            Display
                          </span>
                        </div>
                        <div className="w-1/3 text-left pl-10">
                          <picture>
                            <img className="w-full" src={f2} />
                          </picture>
                          <h5 className="text-[#FFFFFF] mt-6 text-2xl font-helvetica font-medium">
                            Immersive
                          </h5>
                          <span className="font-artusi italic text-2xl text-[#FFFFFF]">
                            {" "}
                            Display
                          </span>
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
