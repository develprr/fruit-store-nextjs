import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for Docker — produces a self-contained server.js
  output: "standalone",
};

export default nextConfig;
