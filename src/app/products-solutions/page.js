import React from "react";
import "../../../public/assets/css/about.css";
import Link from "next/link";
import { Technologies } from "@/components/ui/Technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { getProductsData } from "@/utilities/getProductsData";
import { productsLang } from "@/utilities/constants";
import { getCookie } from "@/utilities/cookie-utils";
const domain = process.env.NEXT_PUBLIC_API_URL;
export const metadata = {
  title: {
    absolute: "Products & Solutions",
  },
  description:
    "Building on our experience of providing services for local & international clients since our establishment in 1997, we started our research and development “R&D” activities and production processes in 2005.",
  keywords: ["Crema", "Creative Management", "Creative Marketing", "About"],
  alternates: {
    canonical: `${domain}/products-solutions`,
  },
};

async function Products() {
  const lang = getCookie("lang")?.value
  const data = await getProductsData(lang?.value || "en-US" );
  const domain = process.env.NEXT_PUBLIC_API_URL;


  return (
    <main className="flex min-h-screen  flex-col items-center justify-center  overflow-hidden">
      <>
        <div
          id="banner"
          className="w-full h-full py-20 flex flex-col items-center justify-center"
        >
          <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:w-full sm:px-12 px-4 flex flex-col justify-center items-center">
            <h1 className="lg:self-start self-center ">{data.pageName}</h1>
            <p className="lg:text-start text-center">
              {data?.pageHeader?.headerTitle}
            </p>
          </div>
        </div>
        <section className="flex flex-col md:flex-row xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] sm:px-12 px-8  w-full h-full gap-6 pt-20   ">
          <div className="flex flex-col justify-start items-center lg:w-4/5 w-full">
            {data?.products?.map((item) => {
              return (
                <div
                  key={item?.productName}
                  className="flex flex-col gap-4 justify-center items-start w-full h-full mb-12 "
                >
                  <div className="flex flex-col justify-center items-start gap-4">
                    <img
                      className="w-full h-full object-contain"
                      src={domain + item?.productIcon}
                      alt="icon"
                    />
                    <h3 className="font-raleway font-semibold text-xl text-[#444]">
                      {item?.productName}
                    </h3>
                  </div>
                  <div
                    className="w-full h-full flex flex-col text-sm py-4 justify-center items-center"
                    dangerouslySetInnerHTML={{ __html: item?.productContent }}
                  ></div>
                  <Link
                    target="_blank"
                    title="productUrl"
                    href={item?.productUrl}
                    className={`bg-transparent text-[#333] border-2 border-[#444]  hover:bg-[#444] hover:text-white uppercase self-center rounded md:p-4 p-2 font-bold  ${
                      item?.productUrl ? "block" : "hidden"
                    }`}
                  >
                    {lang === "en-US"
                      ? productsLang.enButton
                      : productsLang.trButton}
                  </Link>
                </div>
              );
            })}
          </div>
          <Technologies lang={lang} />
        </section>
      </>
    </main>
  );
}

export default Products;
