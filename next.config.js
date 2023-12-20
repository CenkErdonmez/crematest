/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://localhost:44339"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/hakkinda",
        destination: "/about",
      },
      {
        source: "/hizmetler",
        destination: "/services",
      },
      {
        source: "/urunler-cozumler",
        destination: "/products-solutions",
      },
      {
        source: "/portfolyo",
        destination: "/portfolio",
      },
      {
        source: "/musteriler",
        destination: "/clients",
      },
      {
        source: "/iletisim",
        destination: "/contact",
      },
    ];
  },
};
