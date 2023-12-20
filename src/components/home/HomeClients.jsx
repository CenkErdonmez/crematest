"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HomeButton from "./HomeButton";

import { homeClientDesc } from "@/utilities/constants";
const HomeClients = ({ data, languague }) => {
  const domain = process.env.NEXT_PUBLIC_API_URL;
  const lang = languague;
  return (
    <div className=" py-20 items-center justify-center bg-white w-full space-y-10 flex flex-col px-10">
      <h2 className="text-[#444] text-[18px] text-center font-semibold">
        {lang === "en-US" ? homeClientDesc.en_b_br : homeClientDesc.tr_b_br}
        <br />{" "}
        {lang === "en-US" ? homeClientDesc.en_a_br : homeClientDesc.tr_a_br}
      </h2>
      <div className="w-full lg:max-w-[1440px]">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          // centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="w-[80%] "
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i} className="">
              <div className="flex items-center justify-center">
                <img
                  alt="clientLogo"
                  src={domain + item.clientLogo}
                  className=" max-w-4/5 max-h-[70%] grayscale hover:grayscale-0 "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <HomeButton lang={lang}
        label={
          lang === "en-US" ? homeClientDesc.enButton : homeClientDesc.trButton
        }
        scrollY={2000}
        url={"/clients"}
        urlTr={"/musteriler"}
      />
    </div>
  );
};

export default HomeClients;
