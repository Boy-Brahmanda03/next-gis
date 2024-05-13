import dotenv from "dotenv";
import { format } from "prettier";

/** @type {import('next').NextConfig} */
dotenv.config();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://gis_2105551149.local.net:8000/api/:path*", // Proxy to your Laravel backend
      },
    ];
  },
};

const env = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
};

const combineConfig = {
  ...nextConfig,
  env,
};

export default combineConfig;
