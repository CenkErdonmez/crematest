"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import awardBg from "../../../public/assets/img/awardBg.png";
import Image from "next/image";
import "swiper/css";
import { awardsTitle } from "@/utilities/constants";
const AboutSwiper = ({ data, lang }) => {
  return (
    <div className="bg-[#f9f9f9] w-full flex items-center justify-center ">
      <div className="mt-20 px-20  w-fit">
        <h2 className="text-[#c1a159] text-2xl text-center ">
          {lang === "en-US" ? awardsTitle.en : awardsTitle.tr}
        </h2>
        <div className=" w-[90vw] xl:max-w-[1140px] px-10 py-16 ">
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex items-center justify-center  py-12 pb-20 px-2  ">
                  <Image
                    width={220}
                    height={170}
                    className="  object-cover"
                    alt="award"
                    src={awardBg}
                  />
                  <div className="absolute top-0  left-0  h-full w-full group flex items-center justify-center flex-col">
                    <p className="text-[18px] w-[120px] text-[#c1a159] text-center">
                      {item.awardTitle}
                    </p>
                    <p className="text-2xl text-[#c1a159] text-center relative top-9">
                      {item.awardYear}
                    </p>
                    <p className="relative opacity-0 group-hover:opacity-100 transition-all duration-700 text-[#c1a159] top-12 text-center">
                      {item.awardDescription}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSwiper;
