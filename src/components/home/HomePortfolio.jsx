import React from "react";

import Link from "next/link";
import HomeButton from "./HomeButton";
import { homePortLang } from "@/utilities/constants";

const HomePortfolio = ({ data, languague }) => {
  const domain = process.env.NEXT_PUBLIC_API_URL;
  const lang = languague || "en-US";

  return (
    <div className=" py-20  flex flex-col gap-16 items-center justify-center bg-white w-full px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1440px] ">
        {data.portfolios.slice(0, 3).map((item, index) => (
          <div key={index} className="col-span-1 space-y-2">
            <div className="relative  ">
              <img
                width={360}
                height={270}
                alt="logo"
                src={domain + item.portfolioWebSiteImage}
              />
              <div className="absolute top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 h-full w-full transition-all duration-500">
                <Link
                  title="portfolioLink"
                  href="/"
                  className="bg-white flex items-center justify-center w-10 h-10 rounded-full hover:text-[#24bbc4] transition-all duration-500 "
                >
                  ...
                </Link>
              </div>
            </div>
            <h2 className="text-xl text-[#222] font-bold">
              {" "}
              {item.portfolioName}{" "}
            </h2>
            <p className="text-[#888] text-sm max-w-[370px] font-medium leading-6 ">
              {item.portfolioClient}
            </p>
          </div>
        ))}
      </div>

      <HomeButton lang={lang}
        label={lang === "en-US" ? homePortLang.enButton : homePortLang.trButton}
        scrollY={1200}
        url={homePortLang.enUrl}
        urlTr={homePortLang.trUrl}
      />
    </div>
  );
};

export default HomePortfolio;
