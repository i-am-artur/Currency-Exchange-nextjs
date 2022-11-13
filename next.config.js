/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts"],
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
