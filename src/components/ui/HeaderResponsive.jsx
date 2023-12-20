"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { routeData } from "@/utilities/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const HeaderResponsive = ({ open, setOpen, languague }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ul className="bg-[#333] absolute inset-x-0 top-[100px] px-10">
      {routeData.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick}
          className={clsx(
            " text-xs  cursor-pointer hover:opacity-70  font-bold border-b tracking-wide border-b-[#666464] py-3  ",
            pathname === item.link.en || pathname === item.link.tr
              ? "text-[#d3ac23]"
              : "text-[#eee]"
          )}
        >
          <Link
            title={item.link.en}
            onClick={handleClick}
            href={item.link.en}
            as={languague == "en-US" ? item.link.en : item.link.tr}
          >
            {languague == "en-US" ? item.title.en : item.title.tr}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderResponsive;
