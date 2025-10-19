import type { NextConfig } from "next";

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pour Docker
  output: 'standalone',
  
  // Optimisations d'images
  images: {
    domains: [], // Ajoute ici les domaines d'images externes si nécessaire
    formats: ['image/webp', 'image/avif'],
  },
  
  // Strict mode pour React
  reactStrictMode: true,
};

export default nextConfig as NextConfig;