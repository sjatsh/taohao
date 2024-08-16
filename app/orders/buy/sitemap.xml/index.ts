import { prisma } from '@/prisma'
import { siteConfig } from '@/config/site'
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const list = await prisma.products.findMany({
        select: { id: true },
    })
    const fields = list.map((item) => (
        {
            loc: `${siteConfig.url}/${item}`,
            lastModified: new Date().toISOString(),
        }
    ))

    return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() { }