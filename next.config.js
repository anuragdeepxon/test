/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'tl', 'pa', 'zh', 'ar'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig