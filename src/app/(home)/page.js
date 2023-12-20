import {
  HomeSwiper,
  HomeQuote,
  HomeServices,
  HomePortfolio,
  HomeComments,
  HomeClients,
} from "@/components/home";
import { getCookie } from "@/utilities/cookie-utils";
import { getTestimonialsData } from "@/utilities/getTestimonialsData";
import { getClientData } from "@/utilities/getClientsData";

export default async function Home() {
  const lang = getCookie("lang").value;

  const clients = await getClientData(lang);
  const testimonials = await getTestimonialsData(lang);
  const clientsApp = clients.client
    .filter((item) => item.clientLogo !== null)
    .slice(0, 10);
  return (
    <main className="mx-auto h-full w-full mt-[100px] lg:mt-0  overflow-hidden">
      <h1 className="hidden">Software Engineering Communication Design</h1>
      <HomeSwiper />
      <HomeQuote languague={lang} />
      <HomeServices languague={lang} />
      <HomePortfolio data={clients} languague={lang} />
      <HomeComments data={testimonials} languague={lang} />
      <HomeClients data={clientsApp} languague={lang} />
    </main>
  );
}
