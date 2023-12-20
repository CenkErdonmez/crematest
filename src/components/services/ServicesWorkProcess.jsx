"use client";
import React, { useState, useEffect } from "react";
import { stepTitlesEn, stepTitlesTr , stepContentsEn, stepContentsTr ,workProcessDesEN, workProcessDesTR, workProcessH3En, workProcessH3Tr } from "@/utilities/constants";




const ServicesWorkProcess = ({lang}) => {
  const [selectedStep, setSelectedStep] = useState(1);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      setSelectedStep((prevStep) => (prevStep % 5) + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleStepClick = (step) => {
    clearInterval(intervalId);
    setSelectedStep(step);
  };
  return (
    <div className="bg-[#f9f9f9] w-full flex items-center justify-center">
      <div className="flex flex-col justify-center py-12 px-12 gap-8 items-center xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
        <h3 className="text-center font-raleway text-2xl font-semibold">
         { lang === "en-US" ? workProcessH3En : workProcessH3Tr}
        </h3>
        <h4 className="font-raleway text-lg font-semibold text-center pb-6">
         { lang === "en-US" ? workProcessDesEN : workProcessDesTR}
        </h4>
        <ul className="flex justify-between w-full items-center md:flex-row flex-col gap-8">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col  justify-center items-center w-full"
            >
              <li
                className={`${
                  selectedStep === index + 1 ? "bg-[#dd52a4]" : "bg-[#333]"
                } text-white rounded-full  w-14 h-14 flex justify-center items-center   `}
              >
                <a
                  href={`#ptab${index + 1}`}
                  onClick={() => handleStepClick(index + 1)}
                  className="text-3xl "
                >
                  {index + 1}
                </a>
              </li>
              <h5
                className={`${
                  selectedStep === index + 1 ? "text-[#dd52a4]" : "text-[#333]"
                } py-4 font-raleway font-bold text-lg`}
              >
                { lang === "en-US" ? stepTitlesEn[index] : stepTitlesTr[index] }
              </h5>
            </div>
          ))}
        </ul>
        <div className="">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`${
                selectedStep === index + 1
                  ? "block text-[#dd52a4]"
                  : "hidden text-[#333]"
              } text-center text-lg  transition duration-75 ease-in`}
            >
              { lang === "en-US" ? stepContentsEn[index] : stepContentsTr[index] }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWorkProcess;
