import { NEXT_PUBLIC_SITE_URL } from '@taohao/env/src/client'

export type SiteConfig = typeof siteConfig

const baseSiteConfig = {
  title: '淘号网',
  description: '淘号网是一个专注于账号交易的网站，提供账号买卖服务，包括各种社交平台账号：Telegram、Twitter、Twitch、TikTok、Discord、Instagram、ChatGPT等',
  url: NEXT_PUBLIC_SITE_URL,
  keywords: ['淘号网', '掏号网', '账号', '账号购买', '购买账号'],
  themeColor: '#fff',
  icons: {
    icon: '/taohao.png',
    shortcut: '/taohao.png',
    apple: '/taohao.png',
    android: '/taohao.png'
  },
  ogImage: NEXT_PUBLIC_SITE_URL + '/taohao.png',
}

export const siteConfig = {
  ...baseSiteConfig,
  tg_name: 'taohao360',
  pages: {
    orders: {
      search: '/orders/search',
      buy: '/orders/buy',
    },
    app: '/app',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: baseSiteConfig.url,
    title: baseSiteConfig.title,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.title,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/taohao.png`],
  },
}
