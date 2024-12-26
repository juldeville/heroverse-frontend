import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.superherodb.com",
        pathname: "**",
      },
    ],
  },
  typescript: {
    // Bypass TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Bypass ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
