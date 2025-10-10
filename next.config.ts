import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "rs-setohasbadi.com", protocol: "https" },
      { hostname: "randomuser.me", protocol: "https" },
    ],
  },
};

export default nextConfig;
