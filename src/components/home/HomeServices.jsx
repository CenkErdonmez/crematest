"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import HomeButton from "./HomeButton";
import clsx from "clsx";
import { scrollYLocation } from "@/utilities/scrollYLocation";
import { homeServLang } from "@/utilities/constants";
import { homeServicesData } from "@/utilities/constants";
const HomeServices = ({ languague }) => {
  const [scrollY, setScrollY] = useState(0);
  const lang = languague;
  useEffect(() => {
    scrollYLocation(setScrollY);
  }, []);

  return (
    <div className=" py-20  flex flex-col gap-16 items-center justify-center bg-[#eee] w-full px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1440px] ">
        {homeServicesData.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "col-span-1 space-y-5",
              scrollY > 400
                ? index === 0
                  ? "md:left-animation"
                  : index === 1
                  ? "md:center-animation"
                  : "md:right-animation"
                : ""
            )}
          >
            <Image width={40} height={40} alt={item.title} src={item.icon} />
            <h2 className="text-xl text-[#333] font-bold">
              {" "}
              {item.title[lang === "en-US" ? "en" : "tr"]}{" "}
            </h2>
            <p className="text-[#555] lg:max-w-[370px] font-medium leading-6 ">
              {" "}
              {item.description[lang === "en-US" ? "en" : "tr"]}{" "}
            </p>
          </div>
        ))}
      </div>
      <HomeButton lang={lang}
        label={lang === "en-US" ? homeServLang.enButton : homeServLang.trButton}
        scrollY={600}
        url={homeServLang.enUrl}
        urlTr={homeServLang.trUrl}
      />
    </div>
  );
};

export default HomeServices;
