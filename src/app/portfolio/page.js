import React from "react";
import { getClientData } from "@/utilities/getClientsData";
import PortfolioCards from "@/components/portfolio/PortfolioCards";
import { getCookie } from "@/utilities/cookie-utils";
const domain = process.env.NEXT_PUBLIC_API_URL;
export const metadata = {
  title: {
    absolute: "Portfolio",
  },
  description:
    "We stand out as one of the most experienced companies in the sector with more than 500 projects delivered in 25 main industries.",
  keywords: ["Crema", "Creative Management", "Creative Marketing"],
  alternates: {
    canonical: `${domain}/portfolio`,
  },
};

async function Portfolio() {
  const lang = getCookie("lang")?.value;
  const data = await getClientData(lang);

  return (
    <main className="flex min-h-screen  flex-col items-center justify-center  overflow-hidden">
      <>
        <div
          id="banner"
          className="w-full h-full py-20 px-10 flex flex-col items-center justify-center"
        >
          <div className="max-w-[1140px] mx-auto">
            <h1 className="self-start">
              {data?.portfoliosPageInformation?.pageName}
            </h1>
            <p>{data?.portfoliosPageInformation?.pageHeader?.headerTitle}</p>
          </div>
        </div>
        <PortfolioCards lang={lang} data={data} />
      </>
    </main>
  );
}

export default Portfolio;
