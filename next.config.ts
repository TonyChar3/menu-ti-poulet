import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  dev: {
    allowedDevOrigins: [
      "http://10.0.0.125:3000",
      "http://localhost:3000",
      "http://127.0.0.1:8000",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
