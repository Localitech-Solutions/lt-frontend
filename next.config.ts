import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.remediosdigitales.com', 'www.carico-auto.com', 'png.pngtree.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.remediosdigitales.com/1bf8f4/volkswagen-jetta-2025_5/1366_2000.jpeg',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com/png-clipart/20231118/original/pngtree-spare-parts-for-cars-iron-photo-png-image_13611375.png',
        search: '',
      },
    ],
  },
};

export default nextConfig;
