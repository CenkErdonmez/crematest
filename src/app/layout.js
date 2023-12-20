import { Lato } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/providers/GlobalProvider";
import UpButton from "@/components/ui/upButton";
import GoogleProvider from "@/providers/GoogleProvider";
import { getCookie } from "@/utilities/cookie-utils";
import { getFooterData } from "@/utilities/getFooterData";
import { getCounterData } from "@/utilities/getCounterData";
const domain = process.env.NEXT_PUBLIC_API_URL;
const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Crema Creative Management",
    template: "%s | Crema Creative Management ",
  },

  description:
    "Crema is a web-based application development and services company established in 1997.",
  keywords: ["Crema", "Creative Management", "Creative Marketing"],
  alternates: {
    canonical: `${domain}`,
  },
  openGraph: {
    title: "Crema Creative Management",
    description:
      "Crema is a web-based application development and services company established in 1997.",
    url: "https://crema.com.tr",
    siteName: "Crema Creative Management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crema Creative Management",
    description:
      "Crema is a web-based application development and services company established in 1997.",
    siteId: "@cremaCM",
    creator: "Crema",
    creatorId: "Crema",
  },
};

export default async function RootLayout({ children }) {
  const lang = getCookie("lang").value;
  const footerData = await getFooterData(lang);
  const counterData = await getCounterData(lang);

  return (
    <html lang="en">
      {/* <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head> */}
      <body className={lato.className}>
        <GoogleProvider>
          <GlobalProvider
            counterData={counterData}
            footerData={footerData}
            languague={lang}
          >
            {children}
          </GlobalProvider>

          <UpButton />
        </GoogleProvider>
      </body>
    </html>
  );
}
