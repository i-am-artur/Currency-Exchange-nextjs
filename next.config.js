/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx"],
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
