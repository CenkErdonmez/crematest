"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { homeCommentsLang } from "@/utilities/constants";

const HomeComments = ({ data, languague }) => {
  const lang = languague || "en-US";

  const domain = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className=" py-20 items-center justify-center bg-[#eee] w-full space-y-5 px-10">
      <h2 className="text-[#444] text-[18px] text-center font-semibold">
        {lang === "en-US" ? homeCommentsLang.enH2 : homeCommentsLang.trH2}
      </h2>
      <div>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          className=" w-full lg:w-[800px]"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center flex-col">
                <img
                  className="h-[72px] w-[72px] rounded-full aspect-square"
                  alt=""
                  src={domain + item.testimonialProfilePhoto}
                />
                <p className="text-[22px] text-[#555] text-center font-bold mt-5 leading-7">
                  {item?.testimonialComment}
                </p>
                <p className="text-[#555] text-sm font-semibold mt-3">
                  {item?.testimonialName}
                </p>
                <p className="text-sm text-[#999] mt-1">
                  {" "}
                  {item?.testimonialCareerInformation}{" "}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeComments;
