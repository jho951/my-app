/** @type {import('next').NextConfig} */
const {i18n} = require("./next-i18next.config")

const nextConfig = {
  i18n,
  reactStrictMode: false,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "image.tmdb.org"],
    images: {
      sizes: "250px",
    },
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 828, 1080, 1920],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }

    return config
  },
}
module.exports = nextConfig
