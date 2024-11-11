/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: 'always',
  autoLastmod: true,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    additionalSitemaps: [process.env.NEXT_PUBLIC_SITE_URL + '/orders/buy/sitemap.xml'],
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
