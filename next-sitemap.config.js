/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://hieubkav.github.io/HieuCV';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'public',
  sitemapSize: 5000,
  priority: 0.7,
  changefreq: 'weekly',
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api'] },
    ],
    additionalSitemaps: [],
  },
};
