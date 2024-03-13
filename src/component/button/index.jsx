import React from "react";

export default function Button(props) {
  return (
    <>
      <a target="_blank"
        className={`font-helvetica overflow-hidden relative duration-300 ease-linear font-medium text-base md:text-xs lg:text-sm inline-block xl:text-lg after:absolute after:bg-white after:w-0 hover:after:h-[40%] md:hover:after:h-[60%] lg:hover:after:h-[60%] xl:hover:after:h-[60%] 2xl:hover:after:h-[60%] hover:before:h-[40%] md:hover:before:h-[60%] lg:hover:before:h-[60%] xl:hover:before:h-[60%] 2xl:hover:before:h-[60%] hover:after:w-5 md:hover:after:w-7 lg:hover:after:w-7 xl:hover:after:w-7 2xl:hover:after:w-7 after:h-0 after:duration-200 after:ease-linear after:rounded-bl-[110%] after:right-0 after:top-0 before:top-0 before:absolute before:bg-white before:w-0 hover:before:w-5 md:hover:before:w-7 lg:hover:before:w-7 xl:hover:before:w-7 2xl:hover:before:w-7 before:duration-300 before:ease-linear before:h-0 before:rounded-br-[110%] before:left-0 ${
          props.bg == "transparent"
            ? "bg-transparent border-2 border-white after:-top-1 before:-bottom-1  hover:bg-transparent  hover:border-white"
            : "bg-highlight "
        }  text-white px-4    ${
          props.menu
            ? " md:px-4 lg:px-6 xl:px-6 2xl:px-8"
            : "  md:px-10 lg:px-16"
        } py-3 lg:py-3`}
        href="https://calendly.com/charles-tc/30min"
      >
        {props.text}
      </a>
    </>
  );
}
