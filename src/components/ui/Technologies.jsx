"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { technologiesTitle } from "@/utilities/constants";
export const Technologies = ({ lang }) => {
  const [data, setData] = useState("");

  const domain = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      const domain = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await axios.get(
          `${domain}` + "/services/GetTechnologies"
        );

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const customHeader = {
    backendDevelopment: "Backend Development",
    frontendDevelopment: "Frontend Development",
    mobileDevelopment: "Mobile Development",
    dataWebServices: "Data Web Services",
    securityQuality: "Security & Quality",
    platforms: "Platforms",
    uiUxDesign: "UI/UX Design",
  };
  const findHeader = (key) => {
    return customHeader[key];
  };
  return (
    <div className=" space-y-5 pb-20">
      <h2 className="text-[15px] text-[#444444] ">{lang === "en-US" ? technologiesTitle.en : technologiesTitle.tr}</h2>
      {data &&
        Object.entries(data[0]).map(([key, value], index) => (
          <div key={index} className="space-y-2">
            <h2 className=" whitespace-nowrap text-[14px] ">
              {findHeader(key)}{" "}
            </h2>
            <div className="relative  md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-wrap ">
              {value.map((item, index) => (
                <div key={index} className="relative group w-20 h-20 ">
                  <img
                    alt={item.technologyName}
                    src={domain + item?.technologyIcon}
                    className="h-full w-full object-cover "
                  />
                  <div className="absolute top-20 h-0 group-hover:h-full opacity-0 group-hover:opacity-100 z-10 left-0 w-full transition-all duration-700  bg-black text-white  flex  text-xs text-center items-center justify-center  ">
                    {" "}
                    {item.technologyName}{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
