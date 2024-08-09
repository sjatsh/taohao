import NextLink from 'next/link'
import { Key } from 'react'

import { OrderCard } from '@/app/components/order'
import { siteConfig } from '@/config/site'
import Announcement from '@/app/components/announcement'
import { trpc } from '@/lib/trpc'

export default function Home() {
  const { data: products } = trpc.products.list.useQuery()

  return (
    <>
      <Announcement />
      <div className="mt-5 grid grid-cols-5">
        {products?.map(
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
