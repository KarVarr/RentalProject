// const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

// module.exports = withNextIntl({
//   // остальные настройки Next.js
// });

const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'incredible-love-6a2151f21a.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'incredible-love-6a2151f21a.media.strapiapp.com',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/home', // или '/ru/home', если хочешь другой язык по умолчанию
        permanent: true
      }
    ];
  }
};

module.exports = withNextIntl(nextConfig);


