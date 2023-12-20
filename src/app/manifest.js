const domain = process.env.NEXT_PUBLIC_API_URL;
export default function manifest() {
  return {
    name: "Crema Creative Management",
    short_name: "Crema",
    description:
      "Crema is a web-based application development and services company established in 1997.",
    start_url: { domain },
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
