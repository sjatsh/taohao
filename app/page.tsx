import NextLink from 'next/link'
import { Key } from 'react'

import { OrderCard } from '@/app/components/order'
import { siteConfig } from '@/config/site'
import { defaultProductSelect } from '@/server/routers/products'
import { prisma } from '@/prisma'
import Announcement from '@/app/components/announcement'

export default async function Home() {
  const products = await prisma.products.findMany({
    select: defaultProductSelect,
  })

  return (
    <>
      <Announcement />
      <div className="mt-5 grid grid-cols-5">
        {products.map(
          (item: {
            id: Key | null | undefined
            num: number
            image: string
            price: number
            title: string
          }) => (
            <NextLink
              key={item.id}
              className={`${item.num === 0 ? 'pointer-events-none' : ''}`}
              href={siteConfig.pages.orders.buy + '/' + item.id}
            >
              <OrderCard
                key={item.id}
                img={item.image}
                num={item.num}
                price={item.price}
                title={item.title}
              />
            </NextLink>
          ),
        )}
      </div>
    </>
  )
}
