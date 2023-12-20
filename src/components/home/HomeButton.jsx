"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { scrollYLocation } from "@/utilities/scrollYLocation";

const HomeButton = ({ label, scrollY, url, urlTr, lang }) => {
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    scrollYLocation(setIsScrolled);
  }, [isScrolled]);

  return (
    <Link
      href={url}
      title="linkToInnerPageButton"
      as={lang == "en-US" ? { url } : { urlTr }}
      className={clsx(
        " whitespace-nowrap border-2 border-[#555] hover:bg-[#555] rounded transition-all duration-500 text-[#555] hover:text-white px-6 sm:px-8 py-2 font-semibold ",
        isScrolled > scrollY ? "md:button-animation" : ""
      )}
    >
      {label}
    </Link>
  );
};

export default HomeButton;
