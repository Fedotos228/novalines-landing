/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      }
    ],
    domains: ['novalines-cms-dc8718f109d2.herokuapp.com'],
  }
}

export default nextConfig
