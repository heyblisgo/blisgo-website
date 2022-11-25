/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "blisgo-file.s3.ap-northeast-2.amazonaws.com"],
  },
}

module.exports = nextConfig
