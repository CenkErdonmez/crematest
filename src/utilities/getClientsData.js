import axios from "axios";
import https from "https";
export async function getClientData(lang) {
  try {
    const domain = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(
      `https://crema.cremalia.com/portfolio/GetPortfolioByCategory?lang=${lang}`,
      {
        headers: {
          Authorization: "Basic " + btoa("crema" + ":" + "97Grande21"),
          // Add other headers if needed
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
