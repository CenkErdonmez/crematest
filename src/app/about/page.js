import React from "react";
import "../../../public/assets/css/about.css";
import AboutSwiper from "@/components/about/AboutSwiper";
import AboutVideo from "@/components/about/AboutVideo";
import { getAboutData } from "@/utilities/getAboutData";
import { getCookie } from "@/utilities/cookie-utils";
const domain = process.env.NEXT_PUBLIC_API_URL;
export const metadata = {
  title: {
    absolute: "About",
  },
  description:
    "Crema is a software development and digital services company established in 1997.",
  keywords: ["Crema", "Creative Management", "Creative Marketing", "About"],
  alternates: {
    canonical: `${domain}/about`,
  },
};

async function About() {
 const lang = getCookie("lang")?.value

  const data = await getAboutData(lang);

  const domain = process.env.NEXT_PUBLIC_API_URL;
  const gif = domain + data?.aboutGif;

  return (
    <>
      <main className="flex min-h-screen  flex-col items-center justify-center  overflow-hidden">
        <>
          <div
            id="banner"
            className="w-full  h-full py-20 flex flex-col items-center justify-center px-10"
          >
            <div className="max-w-[1140px] mx-auto">
              <h1 className="self-start">{data?.pageName}</h1>
              <p>{data?.pageHeader?.headerTitle}</p>
            </div>
          </div>
          <section className="w-screen  flex flex-col justify-center items-center z-2">
            <div
              className="flex flex-col bg-white  justify-center items-center lg:px-52 gap-4 h-full z-10 py-16 container-xl px-12"
              dangerouslySetInnerHTML={{ __html: data?.aboutContent1 }}
            />

            <AboutVideo data={gif} />

            <div className="w-full h-full relative  z-20">
              <img
                className="w-full"
                src={domain + data?.aboutFormula}
                alt="formula"
              />
            </div>

            <div
              className="flex flex-col justify-center bg-white  items-center w-full lg:px-52 gap-4 h-full z-10 py-16 container-xl px-12"
              dangerouslySetInnerHTML={{ __html: data?.aboutContent2 }}
            />

            <div className="w-full bg-white h-full flex justify-center items-center px-12">
              <img
                className="object-contain md:block hidden"
                src={domain + data?.aboutQualityAssurance}
                alt="envelope"
              />
            </div>

            <AboutSwiper lang={lang} data={data?.awards} />
          </section>
        </>
      </main>
    </>
  );
}

export default About;
