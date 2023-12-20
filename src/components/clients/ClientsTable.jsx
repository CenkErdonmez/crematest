"use client";
import React, { useState } from "react";
import useWindowSize from "@/utilities/useWindowSize";
import Link from "next/link";
import FilterButtons from "../FilterButtons";
import { buttonsData } from "@/utilities/constants"


const ClientsTable = ({ data, lang }) => {

  const [selectedCategory, setSelectedCategory] = useState("Show All");
  const [filteredData, setFilteredData] = useState(data);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "Show All") {
      setFilteredData(data);
    } else {
      const filtered = data
        .map((client) => ({
          ...client,
          portfolios: client.portfolios.filter(
            (portfolio) =>
              portfolio.portfolioCategory ===
              (lang === "en-US" ? category : getCategoryTranslation(category))
          ),
        }))
        .filter((client) => client.portfolios.length > 0);

      setFilteredData(filtered);
    }
  };

  const getCategoryTranslation = (category) => {
    const translatedCategory = buttonsData.find(
      (item) => item.en === category
    )?.tr;
    setSelectedCategory(translatedCategory || category);
  };
  const { width } = useWindowSize();
  const domain = process.env.NEXT_PUBLIC_API_URL;
  const count = width < 640 ? 2 : width < 768 ? 3 : width < 1024 ? 4 : 5;
  const rows = [];
  for (let i = 0; i < filteredData?.length; i += count) {
    const rowItems = filteredData?.slice(i, i + count).map((item, index) => (
      <td
        key={index}
        className="w-[200px] h-[150px]  p-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <Link title="clients" href={`/portfolio/${item.clientId} ` || ""}>
            <img className="" src={domain + item?.clientLogo} alt="logo" />
          </Link>
        </div>
      </td>
    ));
    rows.push(<tr key={i}>{rowItems}</tr>);
  }

  return (
    <div className="px-10 space-y-10">
      <FilterButtons
      lang={lang}
        onClick={handleCategoryChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <table className="clients-table ">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
