/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'always',
  autoLastmod: true,
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
      changefreq: config.changefreq,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}