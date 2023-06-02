const nextConfig = {
  //다국어 설정
  i18n: {
    locales: ["en", "ko", "zh-CN", "ar"],
    defaultLocale: "ko",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en",
      },
      {
        domain: "example.co.kr",
        defaultLocale: "ko",
      },
      {
        domain: "example.co.cn",
        defaultLocale: "zh-CN",
      },
      {
        domain: "example.co.ar",
        defaultLocale: "ar",
      },
    ],
  },
  reactStrictMode: true,

  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "image.tmdb.org"],
    deviceSizes: [640, 828, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: "default",
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
