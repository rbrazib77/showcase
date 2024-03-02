import React from "react";
import Card from "../card";

const index = () => {
  return (
    <section className="bg-black pt-[153px] pb-[303px]">
      <div className="">
        <p className="w-[1085px] px-11 text-center m-auto text-6xl text-[#FFFFFF] leading-[120%]">
          Our straightforward{" "}
          <span className="text-[#F7381E]">pricing structure ensures</span> you
          know exactly what your paying for, without any guesswork
        </p>
        <h2 className="text-[#FFFFFF] text-center text-6xl font-helvetica font-medium leading-[120%] pt-[193px] pb-[100px]">
          Pricing
        </h2>
        <Card />
      </div>
    </section>
  );
};

export default index;
