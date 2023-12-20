"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/img/crema-logo.png";
import newLogo from "../../../../public/assets/img/crema-logo-sticky.png";
import { scrollYLocation } from "@/utilities/scrollYLocation";
import HeaderResponsive from "../HeaderResponsive";
import hamburgerMenu from "../../../../public/assets/svg/hamburger.svg";
import HeaderLang from "./HeaderLang";
import { routeData } from "@/utilities/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Header = ({languague}) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    scrollYLocation(setScrollY);
  }, []);

  return (
    <div
      className={`bg-[#333333] xl:bg-black/70 px-2 sm:px-5 md:px-16 lg:px-[30px]  fixed top-0 left-0 z-50 w-full transition-all duration-500 flex items-center justify-between ${
        scrollY > 0 ? " h-[100px] lg:h-[60px]" : "h-[100px]"
      }  `}
    >
      <Image
        width={24}
        height={24}
        alt="Hamburger Menu"
        src={hamburgerMenu}
        onClick={() => setIsHeaderOpen(!isHeaderOpen)}
        className="lg:hidden cursor-pointer"
      />
      <Link title="homePage" href="/" className="lg:hidden">
        <Image alt="Crema Logo" width={200} height={100} src={logo} />
      </Link>
      <Link title="homePage" href="/" className="hidden lg:block">
        <Image
          alt="Crema Logo"
          width={scrollY > 0 ? 177 : 200}
          height={scrollY > 0 ? 90 : 100}
          src={scrollY > 0 ? newLogo : logo}
        />
      </Link>
      <div className="flex items-center gap-10">
        <div className="space-x-5 xl:space-x-10 hidden lg:block ">
          {routeData.map((item, index) => (
            <Link
              key={index}
              title={item.link.en}
              className={clsx(
                "font-bold text-[13px] text-[#eeeeee] hover:text-[#d3ac23] transition-all duration-500 leading-[22px] ",
                pathname === item.link.en || pathname === item.link.tr
                  ? "text-[#d3ac23]"
                  : ""
              )}
              href={item.link.en}
              as={languague == "en-US" ? item.link.en : item.link.tr}
            >
              {languague == "en-US" ? item.title.en : item.title.tr}
            </Link>
          ))}
        </div>
        <HeaderLang languague={languague} />
      </div>
      {isHeaderOpen && (
        <HeaderResponsive languague={languague}  open={isHeaderOpen} setOpen={setIsHeaderOpen} />
      )}
    </div>
  );
};

export default Header;
