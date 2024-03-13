import React from "react";
import Card from "../card";

const index = () => {
  return (
    <section className="bg-black  md:px-[175px] lg:px-[175px] xl:px-[175px] 2xl:px-[175px] pt-[20px] md:pt-[153px] lg:pt-[153px] xl:pt-[153px] 2xl:pt-[153px] pb-[40px] md:pb-[303px] xl:pb-[303px] lg:pb-[303px] 2xl:pb-[303px]">
      <div className="">
        <p className="w-[430px] md:w-[1085px] lg:w-[1085px] xl:w-[1085px] 2xl:w-[1085px] px-5 md:px-11 lg:px-11 xl:px-11 2xl:px-11  font-helvetica font-medium text-center m-auto text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl text-[#FFFFFF] tracking-[1%]  leading-[120%]">
          Our straight forward{" "}
          <span className="text-[#F7381E] font-artusiG italic font-bold">
            pricing structure ensures
          </span>{" "}
          you know exactly what your paying for, without any guesswork
        </p>
        <h2 className="text-[#FFFFFF] text-center text-6xl font-helvetica font-medium leading-[120%] pt-[80px] md:pt-[193px] lg:pt-[193px] xl:pt-[193px] 2xl:pt-[193px] pb-[50px] md:pb-[100px] lg:pb-[100px] xl:pb-[100px] 2xl:pb-[100px]">
          Pricing
        </h2>
        <Card />
      </div>
    </section>
  );
};

export default index;
