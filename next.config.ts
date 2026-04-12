import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/vrushal_portfolio',
  trailingSlash: true,
};

export default nextConfig;
