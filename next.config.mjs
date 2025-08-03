/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
};

export default nextConfig;
