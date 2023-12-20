import React from "react";
import Link from "next/link";
import { getClientData } from "@/utilities/getClientsData";
import { getPortfolioById } from "@/utilities/getPortfolioById";
import { cookies } from "next/headers";
import { slugButton } from "@/utilities/constants";
async function page({ params }) {
  const data = await getPortfolioById(params.clientId);
  const cookieStore = cookies();
  const lang = cookieStore.get("lang");
  const banner = await getClientData(lang.value || "en-US");

  const domain = process.env.NEXT_PUBLIC_API_URL;

  return (
    <main className="flex min-h-screen  flex-col items-center justify-start  overflow-hidden">
      <>
        <div
          id="banner"
          className="w-full h-full py-20  flex flex-col items-center justify-center"
        >
          <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:w-full sm:px-12">
            <h1 className="self-start">
              {banner?.portfoliosPageInformation?.pageName}
            </h1>
            <p>{banner?.portfoliosPageInformation?.pageHeader?.headerTitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 gap-5">
          {data.client[0].portfolios.map((item, index) => (
            <div key={index} className="relative">
              <div className="relative max-w-[360px] h-[270px] border">
                <img
                  alt="client-portfolio"
                  src={domain + item?.portfolioWebSiteImage}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center hover:bg-black/30 transition-all duration-500 opacity-0 hover:opacity-100">
                  <div
                    className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-center text-lg ${
                      item.portfolioWebSiteUrl == "" ? "hidden" : ""
                    } `}
                  >
                    <Link
                      className=""
                      title="external"
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
                {data.client[0].clientName}
              </p>
            </div>
          ))}
          <div className="flex justify-center items-center max-w-[360px] h-[270px] border-2 border-[#f6f6f6] bg-[#f6f6f6] text-[#aaa] text-xl leading-6 font-semibold text-center cursor-pointer hover:border-[#777] hover:text-black">
            <Link
              title="other portfolios"
              href={{
                pathname: "/portfolio",
                query: {
                  category: data.client[0].portfolios[0].portfolioCategory,
                },
              }}
            >
              {lang.value === "en-US" ? slugButton.en_b_br : slugButton.tr_b_br}{" "}
              <br />{" "}
              {lang.value === "en-US" ? slugButton.en_a_br : slugButton.tr_a_br}
            </Link>
          </div>
        </div>
      </>
    </main>
  );
}

export default page;
