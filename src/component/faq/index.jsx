import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import faqimg from "../../assets/images/faq/faq.png";
import { motion, cubicBezier } from "framer-motion";

export default function Faqs() {
  let [faqs, setFaqs] = useState(0);

  let handleAccordion = (i) => {
    // if(faqs == 0 || faqs){
    //     setFaqs(null)
    // }else{
    // }

    if (faqs === i) {
      setFaqs(0);
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
      <div className="bg-black pb-[30px] md:pb-[334px] lg:pb-[334px] xl:pb-[334px] 2xl:pb-[334px]">
        <div className="md:pl-24 lg:pl-24 xl:pl-24 2xl:pl-24">
          <div className="">
            <div className="md:flex lg:flex xl:flex 2xl:flex items-center">
              <div className="md:w-[783px] lg:w-[783px] xl:w-[783px] 2xl:w-[783px] md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20">
                <div className="">
                  <h2 className="text-white pl-10 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 font-helvetica font-medium text-[28px] md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl leading-[120%] pb-10 md:pb-14 lg:pb-14 2xl:pb-14 xl:pb-14 tracking-[1%]">
                    Frequently Ask{" "}
                    <span className="text-[#F7381E] font-artusiG italic">
                      Questions
                    </span>
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
                      className="bg-[#0F0F0F] shadow-lg p-6 last:border-b-0 border-b-2 border-[#2C2C2C]  rounded  md:mb-5 xl:mb-5 lg:mb-5 2xl:mb-5 "
                    >
                      <h4
                        onClick={() => handleAccordion(i)}
                        className="cursor-pointer text-[#FFFFFF] text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium font-helvetica flex justify-between "
                      >
                        <span className="flex gap-3">
                          {faqs === i && (
                            <span className="w-5 h-9 bg-red-500 block rounded-br-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  to-highlight  to-[112%] from-[-26%] from-[#000000]"></span>
                          )}
                          {item.title}
                          {faqs === i && (
                            <span className="w-5 h-9 bg-red-500 block rounded-bl-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  to-highlight  to-[112%] from-[-26%] from-[#000000]"></span>
                          )}
                        </span>

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
                        <p className="accordine font-helvetica md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] text-[15px] text-[#8F8F8F]  pt-6 font-normal pr-12">
                          {item.answere}{" "}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className="  mt-[30px] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
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
