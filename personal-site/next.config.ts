import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/personal-site",
  output: "export",  // enables github hosting
  reactStrictMode: true,
};

export default nextConfig;
