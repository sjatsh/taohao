/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/orders/buy/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      process.env.SITE_URL+'/orders/buy/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}