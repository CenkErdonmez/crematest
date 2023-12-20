"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import footerLogo from "../../../../public/assets/img/logofooterlogo.png";
import microsoftPartner from "../../../../public/assets/img/microsoft-partner.png";
import umbracoPartner from "../../../../public/assets/img/umbraco-partner.png";

import footerWorld from "../../../../public/assets/img/world-map.png";
import Link from "next/link";
import useWindowSize from "@/utilities/useWindowSize";
import axios from "axios";
import FooterForm from "./FooterForm";
import whatsapp from "../../../../public/assets/img/whatsapp-icon.png";
import whatsapp1 from "../../../../public/assets/img/whatsapp-icon-hover.png";

import instagram from "../../../../public/assets/svg/Instagram.svg";
import instagram1 from "../../../../public/assets/svg/Instagram1.svg";

import facebook from "../../../../public/assets/svg/Facebook.svg";
import facebook1 from "../../../../public/assets/svg/Facebook1.svg";

import twitter from "../../../../public/assets/svg/Twitter.svg";
import twitter1 from "../../../../public/assets/svg/Twitter1.svg";

import linkedin from "../../../../public/assets/svg/Linkedin.svg";
import linkedin1 from "../../../../public/assets/svg/Linkedin1.svg";

import { footerTitle, footerDesc, footerDesc1 } from "@/utilities/constants";
import { routeData } from "@/utilities/constants";
function Footer({ footerData, languague }) {
  const windowSize = useWindowSize();

  const lang = languague;
  return (
    <footer className="bg-[#333]  flex flex-col justify-center items-center  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 sm:px-10 py-20 gap-20 lg:gap-5 xl:gap-20 w-full lg:w-fit">
        <div className="col-span-1 space-y-5">
          <Image alt="Logo" src={footerLogo} width={160} height={40} />
          <div className="relative">
            {Object.entries(footerData)
              .slice(0, 2)
              .map(([key, value], index) => (
                <div key={index} className="text-[#ccc] text-sm">
                  <span className="font-semibold bottom-dotted capitalize ">
                    {key}{" "}
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            <Image
              alt="World"
              src={footerWorld}
              width={200}
              height={200}
              className="absolute top-0 left-0"
            />
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-[#ddd] text-[15px] font-semibold">
            {lang === "en-US" ? footerTitle.en : footerTitle.tr}
          </h3>
          <div>
            <div className="flex flex-col">
              {routeData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link.en}
                  title={item.link.en}
                  as={lang == "en-US" ? item.link.en : item.link.tr}
                  className=" text-[#ccc] text-sm "
                >
                  {lang == "en-US" ? item.title.en : item.title.tr}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 ">
          <div className="flex flex-col sm:flex-row items-center gap-6 xl:gap-10">
            <Image
              alt="Partner"
              src={microsoftPartner}
              width={windowSize.width < 1100 ? 173 : 185}
              height={80}
            />
            <Image
              alt="Partner"
              src={umbracoPartner}
              width={windowSize.width < 1100 ? 173 : 270}
              height={80}
            />
          </div>
          <p className="text-xs text-[#eee] mt-10">
            {lang === "en-US" ? footerDesc.en : footerDesc.tr}
          </p>
          <FooterForm />
        </div>
      </div>

      <div className="bg-[#292929] px-5 sm:px-10 flex flex-col sm:flex-row gap-10 py-20  items-center justify-between w-full">
        <p className="text-[#ffffff40] text-sm">
          {lang === "en-US" ? footerDesc1.en[0] : footerDesc1.tr[0]}
          <br />
          {lang === "en-US" ? footerDesc1.en[1] : footerDesc1.tr[1]}
        </p>
        <div className="flex gap-3 items-center justify-center">
          {footerData?.socials &&
            Object.entries(footerData?.socials).map(([key, value], index) => (
              <Link
                href={value ?? ""}
                target="_blank"
                key={index}
                className={`${
                  key === "facebook"
                    ? "hover:bg-[#1877F2]"
                    : key === "instagram"
                    ? "hover:bg-[#698fc2]"
                    : key === "linkedin"
                    ? "hover:bg-[#0A66C2]"
                    : key === "twitter"
                    ? "hover:bg-[#00acee]"
                    : "hover:bg-green-500"
                }  relative w-10 sm:w-[54px] group h-10 sm:h-[54px] rounded-md  cursor-pointer transition-all duration-500  flex flex-col items-center justify-center overflow-hidden`}
              >
                <Image
                  width={32}
                  height={32}
                  alt="Social"
                  src={
                    key === "facebook"
                      ? facebook
                      : key === "instagram"
                      ? instagram
                      : key === "linkedin"
                      ? linkedin
                      : key === "twitter"
                      ? twitter
                      : whatsapp
                  }
                  className="transition-all duration-500 translate-y-2/4 group-hover:-translate-y-full"
                />
                <Image
                  width={32}
                  height={32}
                  alt="Social"
                  src={
                    key === "facebook"
                      ? facebook1
                      : key === "instagram"
                      ? instagram1
                      : key === "linkedin"
                      ? linkedin1
                      : key === "twitter"
                      ? twitter1
                      : whatsapp1
                  }
                  className="transition-all duration-500 translate-y-full group-hover:-translate-y-2/4"
                />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
