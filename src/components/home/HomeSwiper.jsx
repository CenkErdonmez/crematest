"use client";
import React, {useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import homeBg from "../../../public/assets/img/crema-banner1.jpg";
import Image from "next/image";
import "swiper/css";
import HomeDown from "./HomeDown";

import left from "../../../public/assets/svg/left.svg";
import right from "../../../public/assets/svg/right.svg";

const HomeSwiper = () => {
  const swiperRef = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.4}px)`,
  };


  return (
    <div className="relative z-[-1]"  style={parallaxStyle}  >
      <Swiper loop={true}
       onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      >
        <SwiperSlide>
          <Image
            className=" h-1/2 xl:h-screen w-screen object-cover"
            alt="bgImage"
            src={homeBg}
          />
        </SwiperSlide>
      </Swiper>
      <HomeDown />
      <button  onClick={() => swiperRef.current?.slidePrev()} className="flex items-center justify-center w-12 h-12 rounded bg-black/30 hover:bg-black/80 transition-all duration-500 absolute left-1 inset-y-1/2 z-50">
        <Image src={left} alt="left" width={16} height={16} />
      </button>
      <button onClick={() => swiperRef.current?.slideNext()} className="flex items-center justify-center w-12 h-12 rounded bg-black/30 hover:bg-black/80 transition-all duration-500 absolute right-1 inset-y-1/2 z-50">
        <Image src={right} alt="right" width={16} height={16} />
      </button>

    </div>
  );
};

export default HomeSwiper;
