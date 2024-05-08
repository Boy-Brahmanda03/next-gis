import dotenv from "dotenv";

/** @type {import('next').NextConfig} */
dotenv.config();

const nextConfig = {};

const env = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
};

const combineConfig = {
  ...nextConfig,
  env,
};

export default combineConfig;
