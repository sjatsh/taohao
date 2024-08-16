import { siteConfig } from '@/config/site';
import React from 'react'

export const metadata = {
  title: "订单详情",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="pb-8 pl-4 text-lg font-bold text-gray-500">订单详情</p>
      {children}
    </>
  )
}
