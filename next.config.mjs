/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REDIS_KEY: process.env.REDIS_KEY,
  },
};

export default nextConfig;
