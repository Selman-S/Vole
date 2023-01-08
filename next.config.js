/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.vole.io',
      'other-image-host.com'
    ]
  },
}

module.exports = {
  images: {
    domains: ['cdn.vole.io'],
  },
  // Other Next.js configuration
};
