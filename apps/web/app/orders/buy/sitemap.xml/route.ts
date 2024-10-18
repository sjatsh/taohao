import { getServerSideSitemap } from 'next-sitemap'
import { prisma } from '@taohao/prisma'

import { siteConfig } from '@/config/site'

export async function GET() {
  const list = await prisma.products.findMany({
    select: { id: true },
  })
  const fields = list.map((item) => ({
    loc: `${siteConfig.url}/orders/buy/${item.id}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(fields)
}
