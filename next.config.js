// // next.config.js
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//   },
// };

// module.exports = nextConfig;


// TEMPORARY TO HIDE WARNINGS DURING DEVELOPMENT
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Hide all warnings from css-loader / postcss-loader
    config.ignoreWarnings = [
      { module: /css-loader/ },
      { module: /postcss-loader/ },
    ]

    // Suppress all other warnings globally
    config.infrastructureLogging = { level: 'error' }
    config.stats = 'errors-only'

    return config
  },
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
