// /** @type {import('next').NextConfig} */
// const withPlugins = require("next-compose-plugins")
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "image.ajunews.com"],
    // 이미지 너비 목록을 지정 (화면의 전체 너비보다 작은 이미지)
    imageSizes: [320, 640, 960, 1200, 1440, 1920],
    // 예상 장치 너비를 알고 있는 경우 breakingPoint 적용
    deviceSizes: [280, 320, 384, 414, 640, 768, 820, 1080, 1920],
    quality: 50,
    // 캐시로 60초간 이미지를 가지고 있는다.
    minimumCacheTTL: 40,
    formats: ["image/avif", "image/webp"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig

// const withImages = require("next-images")
// const withS3AndCloudfront = require("next-s3-cloudfront")
// const {S3Client, GetObjectCommand} = require("@aws-sdk/client-s3")
// const {
//   CloudFrontClient,
//   GetObjectCommand,
// } = require("@aws-sdk/client-cloudfront")

// const s3 = new S3Client({
//   region: "your-s3-region",
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
// })
// const cloudfront = new CloudFrontClient({
//   region: "your-cloudfront-region",
//   accessKeyId: process.env.CLOUDFRONT_ACCESS_KEY_ID,
//   secretAccessKey: process.env.CLOUDFRONT_SECRET_ACCESS_KEY,
// })

// module.exports = withImages(
//   withS3AndCloudfront({
//     s3,
//     bucket: "file.galmaetgil.kr",
//     cloudfront,
//     distributionId: "your-cloudfront-distribution-id",
//     images: {
//       domains: ["s3.ap-northeast-2.amazonaws.com", "image.ajunews.com"],
//       // 이미지 너비 목록을 지정 (화면의 전체 너비보다 작은 이미지)
//       imageSizes: [
//         {
//           width: 320,
//           height: 240,
//         },
//         {
//           width: 640,
//           height: 480,
//         },
//         {
//           width: 960,
//           height: 720,
//         },
//         {
//           width: 1200,
//           height: 900,
//         },
//       ],
//       // 예상 장치 너비를 알고 있는 경우 breakingPoint 적용
//       deviceSizes: [280, 320, 384, 414, 640, 768, 820, 1080, 1920],
//       quality: 50,
//       // 캐시로 60초간 이미지를 가지고 있는다.
//       minimumCacheTTL: 40,
//       formats: ["image/avif", "image/webp"],
//     },
//   })({
//     webpack(config, options) {
//       return config
//     },
//   })
// )
