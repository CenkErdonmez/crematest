import { getClientData } from "@/utilities/getClientsData";

export default async function Sitemap() {
  const clientData = await getClientData("en-US");
  const posts = clientData?.client.map((item) => ({
    url: `https://crema.com.tr/portfolio/${item.clientId}`,
    lastModified: new Date(),
  }));
  return [
    {
      url: "https://crema.com.tr",
      lastModified: new Date(),
    },
    {
      url: "https://crema.com.tr/about",
      lastModified: new Date(),
    },
    ...posts,
  ];
}
