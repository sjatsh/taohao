import { prisma } from '@/prisma'
import { siteConfig } from '@/config/site'
import { getServerSideSitemap } from 'next-sitemap'

export async function GET() {
    const list = await prisma.products.findMany({
        select: { id: true },
    })
    const fields = list.map((item) => (
        {
            loc: `${siteConfig.url}/${item.id}`,
            lastModified: new Date().toISOString(),
        }
    ))
    return getServerSideSitemap(fields)
}