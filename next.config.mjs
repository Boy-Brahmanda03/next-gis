import dotenv from "dotenv";
import { format } from "prettier";

/** @type {import('next').NextConfig} */
dotenv.config();

const nextConfig = {
async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ]
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
