import React from "react";
import "../../../public/assets/css/about.css";
import { Technologies } from "@/components/ui/Technologies";
import ServicesWorkProcess from "@/components/services/ServicesWorkProcess";
import { getServicesData } from "@/utilities/getServicesData";
import { getAboutData } from "@/utilities/getAboutData";
import { getCookie } from "@/utilities/cookie-utils";
const domain = process.env.NEXT_PUBLIC_API_URL;
export const metadata = {
  title: {
    absolute: "Services",
  },
  description:
    "We offer the services of software development, design, support and maintenance on the subjects which are mostly needed by our clients.",
  keywords: ["Crema", "Creative Management", "Creative Marketing"],
  alternates: {
    canonical: `${domain}/services`,
  },
};

async function Services() {
  const domain = process.env.NEXT_PUBLIC_API_URL;
  const lang = getCookie("lang")?.value;
  const data = await getServicesData(lang);
  const envelope = await getAboutData(lang);
  const envelopeImg = envelope.aboutQualityAssurance;

  return (
    <main className="flex min-h-screen  flex-col items-center justify-center  overflow-hidden">
      <>
        <div
          id="banner"
          className="w-full h-full py-20 flex flex-col items-center justify-center"
        >
          <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:w-full sm:px-12 px-4 flex flex-col justify-center items-center">
            <h1 className=" lg:self-start self-center  ">{data?.pageName}</h1>
            <p className="lg:text-start text-center">
              {data?.pageHeader?.headerTitle}
            </p>
          </div>
        </div>

        <section className="flex flex-col md:flex-row xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] sm:px-12 px-8  w-full h-full gap-4 pt-20  ">
          <div className="flex flex-col justify-center items-center md:w-4/5 w-full">
            {data?.services?.map((item) => {
              return (
                <div
                  key={item.serviceName}
                  className="flex flex-col gap-4 justify-center items-start"
                >
                  <div className="flex justify-center items-center gap-4">
                    <img
                      src={domain + item.serviceIcon}
                      alt="icon"
                      className="text-[#24bbc4]  "
                    />
                    <h3 className="text-base font-raleway font-bold text-[#333]">
                      {item.serviceName}
                    </h3>
                  </div>
                  <div
                    className="mb-12 leading-7 text-[15px] text-[#333] font-medium "
                    dangerouslySetInnerHTML={{ __html: item?.serviceContent }}
                  ></div>
                </div>
              );
            })}
          </div>
          <Technologies lang={lang} />
        </section>
        <img
          src={domain + envelopeImg}
          className="w-full h-full object-fit xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] hidden sm:block"
        />

        <ServicesWorkProcess lang={lang} />
      </>
    </main>
  );
}

export default Services;
