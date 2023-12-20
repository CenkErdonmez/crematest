"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import up from "../../../public/assets/svg/up.svg";
import { scrollYLocation } from "@/utilities/scrollYLocation";
import clsx from "clsx";
const UpButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    scrollYLocation(setScrollY);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed transition-all duration-500 right-5 bottom-20 w-8 h-8 flex items-center justify-center rounded bg-black z-50",
        scrollY > 30 ? "opacity-100" : "opacity-0"
      )}
    >
      <Image src={up} alt="up arrow" width={16} height={16} />
    </button>
  );
};

export default UpButton;
