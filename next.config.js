/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ["image.shutterstock.com"]
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL
  }
}



module.exports = nextConfig
