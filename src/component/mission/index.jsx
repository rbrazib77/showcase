import React from "react";
import mission from '../../assets/images/mission/mission.png'

const index = () => {
  return (
    <section className="bg-black">
      <div className="cus-container">
        <h2 className="text-[#FFFFFF] font-helvetica font-medium leading-[120%] pb-6 text-center text-6xl ">Mission</h2>
        <p className="text-[#C0C0C0] text-center px-[130px] font-medium font-helvetica pb-9 text-2xl w-[1187px] leading-[141%]  relative left-[50%] translate-x-[-50%]">
          Our mission is to revolutionize the way customers engage with fashion
          products, to immerse in experiential touch points like never before.
          Here at Brunello Cucinelli HQ, the first luxury brand we spoke to with
          the StyleIT 2023 Cohort 1 -
        </p>
        <picture>
          <img src={mission} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default index;
