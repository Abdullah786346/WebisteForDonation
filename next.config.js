/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/heal-me-2437d.appspot.com/**',
      },
    ],
  },
};

module.exports = nextConfig;
