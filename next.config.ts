/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this block to your Next.js configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. We strongly recommend fixing the
    // ESLint errors instead of disabling this.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
