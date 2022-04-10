/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // no https://
    domains: ['img.icons8.com']
  }
}

module.exports = nextConfig
