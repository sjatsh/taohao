import { siteConfig } from '@/config/site';
import React from 'react'

export const metadata = {
    title: "订单搜索",
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
            {children}
        </>
    )
}
