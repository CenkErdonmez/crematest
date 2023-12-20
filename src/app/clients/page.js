import React from "react";
import ClientsTable from "@/components/clients/ClientsTable";
import { getClientData } from "@/utilities/getClientsData";
import { getCookie } from "@/utilities/cookie-utils";
const domain = process.env.NEXT_PUBLIC_API_URL;
export const metadata = {
  title: {
    absolute: "Clients",
  },
  description:
    "We stand out as one of the most experienced companies in the sector with more than 100 large & medium scaled clients in 25 main industries.",
  keywords: ["Crema", "Creative Management", "Creative Marketing"],
  alternates: {
    canonical: `${domain}/clients`,
  },
};

async function Clients() {
  const lang = getCookie("lang")?.value;
  const data = await getClientData(lang);
  const customData = data.client.filter((item) => item.clientLogo !== null);

  return (
    <main className="flex min-h-screen w-full  flex-col items-center justify-center  overflow-hidden space-y-12 mb-16">
      <>
        <div
          id="banner"
          className="w-full h-full py-20 flex flex-col items-center justify-center px-10"
        >
          <div className="max-w-[1140px] mx-auto">
            <h1 className="self-start">
              {data?.clientsPageInformation?.pageName}
            </h1>
            <p>{data?.clientsPageInformation?.pageHeader?.headerTitle}</p>
          </div>
        </div>

        <ClientsTable lang={lang} data={customData} />
      </>
    </main>
  );
}

export default Clients;
