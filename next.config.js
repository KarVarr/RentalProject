// const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

// module.exports = withNextIntl({
//   // остальные настройки Next.js
// });

const withNextIntl = require('next-intl/plugin')('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
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


