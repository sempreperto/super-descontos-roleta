/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora erros de ESLint durante o build na Vercel
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
