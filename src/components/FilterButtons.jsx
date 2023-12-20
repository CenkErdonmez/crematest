"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { filterLang } from "@/utilities/constants";
import clsx from "clsx";
import { buttonsData } from "@/utilities/constants"




function FilterButtons({selectedCategory, onClick, setSelectedCategory, lang}) {
  

 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onClick(category);
  };
  const handleShuffleClick = () => {
    const randomIndex = Math.floor(Math.random() * buttonsData.length);
    const randomCategory = buttonsData[randomIndex];
    setSelectedCategory(randomCategory);
    onClick(randomCategory);
  };
  return (
    <div className=" w-full lg:max-w-[1140px]  mt-12 px-12 ">
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          onClick(e.target.value);
        }}
        className="px-3 py-2 md:hidden border w-full rounded-lg outline-none "
      >
        {buttonsData.map((item, index) => (
          <option className={clsx( item.en === selectedCategory ? "bg-gray-200" : "" )} key={index} value={item.en}>
            {" "}
            {lang === "en-US" ? item.en : item.tr}{" "}
          </option>
        ))}
      </select>

      <div className="hidden md:flex items-center gap-7">
        {buttonsData.map((item, index) => (
          <button
            key={index}
            className={`text-[#444] text-sm  cursor-pointer transition duration-300 ${selectedCategory === item.en  
              ? "border-b-2 border-b-[#428de8] "
              : "border-none"
              } `}
            onClick={() => handleCategoryClick(item.en)}
          >
            {lang === "en-US" ? item.en : item.tr}
          </button>
        ))}
        <div className="ml-auto">
          <button
            className=" text-[#444]  cursor-pointer transition duration-300 self-end"
            onClick={handleShuffleClick}
          >
            <FontAwesomeIcon icon={faShuffle} />
          </button>
        </div>
      </div>
      <p className="text-[15px] text-[#999] mt-8 w-full">
        {lang === "en-US" ? filterLang.enDesc : filterLang.trDesc}
      </p>
    </div>
  );
}

export default FilterButtons;
