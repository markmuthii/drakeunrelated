/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rooms/front",
        permanent: true,
      },
      {
        source: "/rooms",
        destination: "/rooms/front",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/products/titles-ruin-everything",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
