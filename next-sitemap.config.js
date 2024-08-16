/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/buy/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      process.env.SITE_URL + '/buy/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    console.log('path', path)
    return {
      loc: path,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}