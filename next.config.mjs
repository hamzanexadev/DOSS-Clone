/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-export',
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
