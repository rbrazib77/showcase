import React from "react";
import phonedetail from "../../assets/images/phonedetails/phonedetails.png";
import circle from "../../assets/images/mobile/circle.png";
import small_logo from "../../assets/images/mobile/c_icon.png";
const index = () => {
  return (
<<<<<<< HEAD
    <section className=" bg-black pt-44 md:pt-0">
      <div className="max-w-screen-2xl mx-auto relative">
=======
    <section className="relative bg-black pt-44 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
>>>>>>> origin/main
      <picture>
        <img src={phonedetail} alt="" className="w-full" />
      </picture>
<<<<<<< HEAD
      <div className="absolute top-8 md:top-5 left-0 md:left-0 ">
=======
      <div className="absolute top-8 md:top-0 lg:top-0 xl:top-0 2xl:top-0 left-0 md:left-0 lg:left-0 xl:left-0 2xl:left-0">
>>>>>>> origin/main
        <div className="circle w-24 md:w-40 lg:w-52">
          <picture className="">
            <img
              className="w-24 md:w-40 lg:w-52 absolute top-full left-1/2 -translate-x-1/2 -translate-y-0 circleAnimation"
              src={circle}
              alt={circle}
            />
          </picture>
          <picture className="">
            <img
              className="absolute -top-full w-12 sm:w-0 left-[75%] md:left-[80%] lg:left-[80%] xl:left-[80%] 2xl:left-[80%] -translate-x-0 translate-y-[50%] md:translate-y-[90%] lg:translate-y-[90%] xl:translate-y-[90%] 2xl:translate-y-[90%]"
              src={small_logo}
              alt={small_logo}
            />
          </picture>
        </div>
      </div>
      </div>
    </section>
  );
};

export default index;
