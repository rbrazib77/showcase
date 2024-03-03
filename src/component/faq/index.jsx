import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import faqimg from "../../assets/images/faq/faq.png";
import { motion, cubicBezier } from "framer-motion";

export default function Faqs() {
  let [faqs, setFaqs] = useState(1);

  let handleAccordion = (i) => {
    // if(faqs == 0 || faqs){
    //     setFaqs(null)
    // }else{
    // }

    if (faqs === i) {
      setFaqs(1);
    }
    setFaqs(i);
  };
  const container = {
    show: {
      transition: {
        delayChildren: 0.04,
        staggerChildren: 0.35,
      },
    },
  };
  const childAnimateX = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: cubicBezier(0.2, 0.2, 0.02, 0.92),
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="bg-black pb-[334px]">
        <div className=" pl-24">
          <div className="">
            <div className="flex items-center">
              <div className="w-[783px] mr-20 ">
                <div className="">
                  <h2 className="text-white text-6xl  leading-[120%] pb-14 tracking-[1%]">
                    Frequently Ask{" "}
                    <span className="text-[#F7381E]">Questions</span>
                  </h2>
                </div>
                <motion.div
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: true }}
                  variants={container}
                  className=" bg-[#0F0F0F] pb-4"
                >
                  {/* ========== One Faqs Question ============ */}
                  {data.map((item, i) => (
                    <motion.div
                      variants={childAnimateX}
                      className="bg-[#0F0F0F] shadow-lg p-6 last:border-b-0 border-b-2 border-[#2C2C2C]  rounded mb-5"
                    >
                      <h4
                        onClick={() => handleAccordion(i)}
                        className="cursor-pointer text-[#FFFFFF] text-2xl font-medium font-helvetica flex justify-between relative after:w-5 after:h-9 after:absolute after:content  after:rounded-br-[100%] after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  after:to-highlight after:left-0 after:top-0 after:to-[112%] after:from-[-26%] after:from-[#000000] "
                      >
                        {++i}
                        {item.title}{" "}
                        <span className="cursor-pointer">
                          {faqs === i ? (
                            <IoIosArrowUp
                              onClick={() => setFaqs(!faqs)}
                              className="inline-block text-2xl"
                            />
                          ) : (
                            <IoIosArrowDown
                              onClick={() => setFaqs(!faqs)}
                              className="inline-block text-2xl"
                            />
                          )}
                        </span>
                      </h4>
                      <div
                        className={`${faqs === i ? "faq expanded " : "faq"}`}
                      >
                        <p className="accordine font-helvetica text-[18px] text-[#8F8F8F]  pt-6 font-normal pr-12">
                          {item.answere}{" "}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className="">
                <picture>
                  <img src={faqimg} alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let data = [
  {
    title: "How does it work?",
    answere:
      "Book a demo with us today, and we will show you in real time the power of showcaseX. We then will discuss what package might be best suited to your brand, dependent on your requirements.",
  },
  {
    title: "How long does it take?",
    answere:
      "We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.",
  },
  {
    title: "What is your brand promise?",
    answere:
      "We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.",
  },
  {
    title: "How do I get in touch?",
    answere:
      "We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.",
  },
];
