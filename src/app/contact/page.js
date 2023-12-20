import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhatsAppLogo from "../../../public/assets/svg/whatsapp.svg";
import { getContactData } from "@/utilities/getContactData";
import { getFooterData } from "@/utilities/getFooterData";
import ContactForm from "@/components/contact/ContactForm";
import { contactLang } from "@/utilities/constants";
import { getCookie } from "@/utilities/cookie-utils";
const domain = process.env.NEXT_PUBLIC_API_URL;
export const metadata = {
  title: {
    absolute: "Contact",
  },
  description: "Get in touch with us !",
  keywords: ["Crema", "Creative Management", "Creative Marketing"],
  alternates: {
    canonical: `${domain}/contact`,
  },
};

async function Contact() {
  const lang = getCookie("lang")?.value
  const banner = await getContactData(lang);
  const phone = await getFooterData(lang);

  return (
    <>
      <main className="flex min-h-screen  flex-col items-center justify-center  overflow-hidden">
        <>
          <div
            id="banner"
            className="w-full  h-full py-20 flex flex-col items-center justify-center Chalkduster"
          >
            <div className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:w-full sm:px-12">
              <h1 className="self-start">{banner.pageName} </h1>
              <p>{banner?.pageHeader?.headerTitle} </p>
            </div>
          </div>
          <section className="xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:w-full sm:px-12 font-raleway ">
            <ContactForm lang={lang} data={banner} />
            <div className="h-full w-full pt-6 pb-24 max-w-[1140px] flex flex-col justify-center items-center">
              <h2 className="self-start pb-12 font-raleway font-semibold text-2xl fancy-title w-full flex">
                {banner.dictionaryValues[1]}
              </h2>
              <div className="flex font-raleway flex-col self-start gap-4">
                <div className="flex gap-2 justify-center items-center">
                  <h4 className="font-raleway font-bold text-2xl">
                    {lang === "en-US"
                      ? contactLang.enPhone
                      : contactLang.trPhone}{" "}
                  </h4>
                  <Link
                    title="whatsapp"
                    target="_blank"
                    href={phone?.socials?.whatsApp ?? ""}
                  >
                    <button className="bg-[#25d366] cursor-pointer p-[22px] h-[40px] text-white flex justify-center items-center gap-2 outline-none drop-shadow-md border-b border-blue-50 font-bold leading-4 m-2 rounded whitespace-nowrap hover:bg-[#428de8]  ">
                      {banner.dictionaryValues[2]}
                      <Image
                        width={20}
                        height={20}
                        alt="logo"
                        src={WhatsAppLogo}
                      />
                    </button>{" "}
                  </Link>
                </div>
                <Link
                  target="_blank"
                  title="whatsapp2"
                  href={phone?.socials?.whatsApp ?? ""}
                  className="font-raleway text-4xl"
                >
                  {phone?.phone}
                </Link>
              </div>
            </div>
          </section>
        </>
      </main>
    </>
  );
}

export default Contact;
