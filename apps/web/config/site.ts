export type SiteConfig = typeof siteConfig

const baseSiteConfig = {
  name: '淘号网',
  description:
    '淘号网是一个专注于账号交易的网站，提供账号买卖服务，包括各种社交平台账号：Telegram、Twitter、TikTok、Discord、Instagram、ChatGPT等',
  url: process.env.SITE_URL,
  keywords: [
    '淘号网', '掏号网', '账号', '账号购买', '购买账号',
    '电报', '电报账号', '电报购买', '电报账号购买', '购买电报', '购买电报账号',
    'Telegram', 'Telegram账号', 'Telegram购买', 'Telegram账号购买', '购买Telegram', '购买Telegram账号',
    'tg', 'tg账号', 'tg购买', 'tg账号购买', '购买tg', '购买tg账号',
    'TG', 'TG账号', 'TG购买', 'TG账号购买', '购买TG', '购买TG账号',
    'Tg', 'Tg账号', 'Tg购买', 'Tg账号购买', '购买Tg', '购买Tg账号',
    'Discord', 'Discord账号', 'Discord购买', 'Discord账号购买', '购买Discord', '购买Discord账号',
    '推特', '推特账号', '推特购买', '推特账号购买', '购买推特', '购买推特账号',
    'Twitter', 'Twitter账号', 'Twitter购买', 'Twitter账号购买', '购买Twitter', '购买Twitter账号',
    'x', 'x账号', 'x购买', 'x账号购买', '购买x', '购买x账号',
    'X', 'X账号', 'X购买', 'X账号购买', '购买X', '购买X账号',
    'TW', 'TW账号', 'TW购买', 'TW账号购买', '购买TW', '购买TW账号',
    'tw', 'tw账号', 'tw购买', 'tw账号购买', '购买tw', '购买tw账号',
    'ChatGPT', 'ChatGPT账号', 'ChatGPT购买', 'ChatGPT账号购买', '购买ChatGPT', '购买ChatGPT账号',
    'chatgpt', 'chatgpt账号', 'chatgpt购买', 'chatgpt账号购买', '购买chatgpt', '购买chatgpt账号',
    'Instagram', 'Instagram账号', 'Instagram购买', 'Instagram账号购买', '购买Instagram', '购买Instagram账号',
    'Ins', 'Ins账号', 'Ins购买', 'Ins账号购买', '购买Ins', '购买Ins账号',
    'ins', 'ins账号', 'ins购买', 'ins账号购买', '购买ins', '购买ins账号',
    'TikTok', 'TikTok账号', 'TikTok购买', 'TikTok账号购买', '购买TikTok', '购买TikTok账号',
    'tiktok', 'tiktok账号', 'tiktok购买', 'tiktok账号购买', '购买tiktok', '购买tiktok账号',
    'tk', 'tk账号', 'tk购买', 'tk账号购买', '购买tk', '购买tk账号',
    '抖音', '抖音账号', '抖音购买', '抖音账号购买', '购买抖音', '购买抖音账号',
    'Douyin', 'Douyin账号', 'Douyin购买', 'Douyin账号购买', '购买Douyin', '购买Douyin账号',
    'douyin', 'douyin账号', 'douyin购买', 'douyin账号购买', '购买douyin', '购买douyin账号',
    '微软', '微软账号', '微软购买', '微软账号购买', '购买微软', '购买微软账号',
    'Microsoft', 'Microsoft账号', 'Microsoft购买', 'Microsoft账号购买', '购买Microsoft', '购买Microsoft账号',
    'microsoft', 'microsoft账号', 'microsoft购买', 'microsoft账号购买', '购买microsoft', '购买microsoft账号',
    'gmail', 'gmail账号', 'gmail购买', 'gmail账号购买', '购买gmail', '购买gmail账号',
    'Gmail', 'Gmail账号', 'Gmail购买', 'Gmail账号购买', '购买Gmail', '购买Gmail账号',
    'google', 'google账号', 'google购买', 'google账号购买', '购买google', '购买google账号',
    'Google', 'Google账号', 'Google购买', 'Google账号购买', '购买Google', '购买Google账号',
    '谷歌', '谷歌账号', '谷歌购买', '谷歌账号购买', '购买谷歌', '购买谷歌账号',
    '谷歌邮箱', '谷歌邮箱账号', '谷歌邮箱购买', '谷歌邮箱账号购买', '购买谷歌邮箱', '购买谷歌邮箱账号',
    '邮箱', '邮箱账号', '邮箱购买', '邮箱账号购买', '购买邮箱', '购买邮箱账号',
    'steam', 'steam账号', 'steam购买', 'steam账号购买', '购买steam', '购买steam账号',
    'Steam', 'Steam账号', 'Steam购买', 'Steam账号购买', '购买Steam', '购买Steam账号',
    '游戏', '游戏账号', '游戏购买', '游戏账号购买', '购买游戏', '购买游戏账号',
    'game', 'game账号', 'game购买', 'game账号购买', '购买game', '购买game账号',
    '蒸汽', '蒸汽账号', '蒸汽购买','蒸汽账号购买', '购买蒸汽', '购买蒸汽账号', 
  ],
  themeColor: '#fff',
  icons: {
    icon: '/taohao.png',
    shortcut: '/taohao.png',
    apple: '/taohao.png',
  },
  ogImage: 'https://taohao.org/taohao.png',
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
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/taohao.png`],
  },
}
