/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
  outputStandalone: true,
  },
  images: {
    domains: ['i.pinimg.com','raw.githubusercontent.com'],
    
  },
}

module.exports = nextConfig
