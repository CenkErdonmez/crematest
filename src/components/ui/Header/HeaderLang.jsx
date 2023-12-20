import React from "react";
import { setCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";
const HeaderLang = ({ languague }) => {
  const router = useRouter();
  const pathname = usePathname();

  // if (/MSIE 10/i.test(navigator?.userAgent)) {
  //   // This is internet explorer 10
  //   window.alert("Güncel bir tarayıcı kullanın!");
  // }

  // if (
  //   /MSIE 9/i.test(navigator?.userAgent) ||
  //   /rv:11.0/i.test(navigator?.userAgent)
  // ) {
  //   // This is internet explorer 9 or 11
  //   window.alert("Güncel bir tarayıcı kullanın!");
  // }

  const handleClick = (lang) => {
    setCookie("lang", lang);
    if (pathname === "/") {
      window.location.reload();
    }
    router.push("/");
    router.refresh();
  };
  return (
    <div className="flex items-center gap-2 sm:gap-3 ">
      <button
        onClick={() => handleClick("en-US")}
        className={`rounded-full sm:w-[30px] sm:h-[30px] w-6 h-6  flex items-center justify-center text-[8px] sm:text-[13px] font-bold text-white hover:bg-[#b11a17] ${
          languague == "en-US" ? "bg-[#0052a4]" : "bg-[#454545]"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => handleClick("tr-TR")}
        className={`rounded-full sm:w-[30px] sm:h-[30px] w-6 h-6  flex items-center justify-center text-[8px] sm:text-[13px] font-bold text-white hover:bg-[#b11a17] ${
          languague === "tr-TR" ? "bg-[#0052a4]" : "bg-[#454545]"
        }`}
      >
        TR
      </button>
    </div>
  );
};

export default HeaderLang;
