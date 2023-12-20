"use client";
import React from "react";
import Image from "next/image";
import icon1 from "../../../public/assets/svg/counter1.svg";
import icon2 from "../../../public/assets/svg/counter2.svg";
import icon3 from "../../../public/assets/svg/counter3.svg";
import icon4 from "../../../public/assets/svg/counter4.svg";
import moment from "moment";
import CountUp from "react-countup";
import { counterData } from "@/utilities/constants";
const Counter = ({languague, data}) => {
  const domain = process.env.NEXT_PUBLIC_API_URL;
  const targetDate = moment([1997, 6, 7]);
  const currentDate = moment();
  const dayDifference = currentDate.diff(targetDate, "days");
  



  return (
    <div className="counter-bg font-raleway lg:h-[500px] py-10 bg-fixed  bg-no-repeat bg-cover bg-bottom flex items-center justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div
          // title="homepage"
          // href="/"
          className="flex flex-col items-center justify-center gap-5"
        >
          <Image width={56} height={56} alt="icon1" src={icon1} />
          <p className="text-[#eee] text-[56px] font-bold ">
            <CountUp
              useGrouping={false}
              end={dayDifference}
              enableScrollSpy
              duration={3}
            />
          </p>
          <span className="w-16 h-[2px] bg-[#eee]"></span>
          <p className="text-[#eee]">
            {languague === "en-US" ? counterData.en : counterData.tr}
          </p>
        </div>
        {data.map((item, index) => (
          <div
            // href={item?.counterUrl}
            // title={item?.counterUrl}
            key={index}
            className="flex flex-col items-center justify-center gap-5"
          >
            <Image
              width={56}
              height={56}
              alt={index === 0 ? icon2 : index === 1 ? icon3 : icon4}
              src={index === 0 ? icon2 : index === 1 ? icon3 : icon4}
            />
            <p className="text-[#eee] text-[56px] font-bold ">
              <CountUp end={item?.counterValue} enableScrollSpy duration={3} />
            </p>
            <span className="w-16 h-[2px] bg-[#eee]"></span>
            <p className="text-[#eee]">{item.counterInformation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
