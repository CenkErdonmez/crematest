"use client";
import React, { useState, useEffect } from "react";
import FilterButtons from "../FilterButtons";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { buttonsData } from "@/utilities/constants"



function PortfolioCards({ data, lang }) {
  const [filteredData, setFilteredData] = useState(data.portfolios);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    "Show All"
  );

  const domain = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (category !== null) {
      const filtered = data.portfolios.filter(
        (item) => item.portfolioCategory == category
      );
      setSelectedCategory(category);
      setFilteredData(filtered);
    } else {
      setFilteredData(data.portfolios);
    }
  }, [category]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category == ("Show All" )) {
      setFilteredData(data.portfolios);
    } else {
      const filtered = data.portfolios.filter(
        (item) => item.portfolioCategory == ( lang === "en-US" ? category : getCategoryTranslation(category))
      );
      setFilteredData(filtered);
    }
  };
  const getCategoryTranslation = (category) => {
    const translatedCategory = buttonsData.find(item => item.en === category)?.tr;
    return translatedCategory || category; 
  };
  return (
    <>
      <FilterButtons
      lang={lang}
        onClick={handleCategoryChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5">
        {filteredData &&
          filteredData?.map((item, index) => (
            <div key={index} className="relative">
              <div className="relative max-w-[360px] h-[270px] border">
                <img
                  alt=""
                  src={domain + item?.portfolioWebSiteImage}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center hover:bg-black/30 transition-all duration-500 opacity-0 hover:opacity-100">
                  <div
                    className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-center text-lg ${
                      item.portfolioWebSiteUrl == "" ? "hidden" : ""
                    } `}
                  >
                    <Link
                      className=""
                      title="portfolioUrl"
                      target="_blank"
                      href={item.portfolioWebSiteUrl}
                    >
                      . . .
                    </Link>
                  </div>
                </div>
              </div>
              <h2 className="font-raleway font-semibold text-lg text-[#222] leading-4 py-3 cursor-pointer hover:text-[#428de8] ">
                {item.portfolioName}
              </h2>
              <p className="text-sm text-[#888] pb-5 ">
                {item.portfolioClient}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default PortfolioCards;
