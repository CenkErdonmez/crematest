"use client";
import React from "react";
import Link from "next/link";

import { homeQuoteDesc } from "@/utilities/constants";
const HomeQuote = ({ languague }) => {
  const lang = languague;

  return (
    <section
      id="home"
      className="bg-[#dddddd] flex flex-col md:flex-row items-center py-20 gap-10 md:gap-20 justify-center px-20"
    >
      <div className="space-y-1">
        <div className="text-2xl font-bold">
          {lang === "en-US" ? homeQuoteDesc.enCall : homeQuoteDesc.trCall}
          <Link
            title="phone"
            target="_blank"
            href=""
            className="text-[#24bbc4]"
          >
            {" "}
            +90.552.578.74.71{" "}
          </Link>
          {lang === "en-US" ? homeQuoteDesc.enEmail : homeQuoteDesc.trEmail}
          <Link
            title="email"
            target="_blank"
            href=""
            className="text-[#24bbc4]"
          >
            {" "}
            info [@] crema.com.tr{" "}
          </Link>
        </div>
        <p>{lang === "en-US" ? homeQuoteDesc.enDesc : homeQuoteDesc.trDesc}</p>
      </div>
      <Link
        href="/contact"
        title="contactPage"
        as={lang == "en-US" ? "/contact" : "/iletisim"}
        className="bg-[#24bbc4] text-white px-7 py-4 rounded font-bold text-xl hover:bg-[#555] transition-all duration-500 whitespace-nowrap"
      >
        {lang === "en-US" ? homeQuoteDesc.enButton : homeQuoteDesc.trButton}
      </Link>
    </section>
  );
};

export default HomeQuote;
