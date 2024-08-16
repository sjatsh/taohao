export type SiteConfig = typeof siteConfig

const baseSiteConfig = {
  name: "淘号网",
  description:"淘号网是一个专注于账号交易的网站，提供账号买卖服务，包括各种社交平台账号：Telegrame、Twitter、TikTok、Discord、Instagram、ChatGPT等",
  url: process.env.SITE_URL,
  keywords: [
    "淘号网",
    "掏号网",
    "账号",
    "电报",
    "Telegrame",
    "Discord",
    "推特",
    "Twitter",
    "X",
    "ChatGPT",
    "Instagram",
    "Ins",
    "TikTok",
    "抖音"
  ],
  themeColor: '#fff',
  icons: {
    icon: "/taohao.png",
    shortcut: "/taohao.png",
    apple: "/taohao.png",
  },
  ogImage: "https://taohao.sjis.me/taohao.png",
}

export const siteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/taohao.png`],
  },
}
