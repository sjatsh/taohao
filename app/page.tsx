'use client'

import NextLink from 'next/link'

import { OrderCard } from '@/app/components/order'
import Announcement from '@/app/components/announcement'
import { trpc } from '@/lib/trpc'

export default function Home() {
  const { data: products } = trpc.products.listNoAuth.useQuery()

  return (
    <div className="p-2">
      <div className="ml-2">
        <Announcement />
      </div>
      <div className="mt-5 flex flex-wrap">
        {products?.map(
          (item: {
            id: number
            num: number
            image: string
            price: number
            title: string
          }) => (
            <div key={item.id} className="mx-2">
              {item.num > 0 ? (
                <NextLink href={`/orders/buy/${item.id}`}>
                  <OrderCard
                    img={item.image}
                    num={item.num}
                    price={item.price}
                    title={item.title}
                  />
                </NextLink>
              ) : (
                <OrderCard
                  img={item.image}
                  num={item.num}
                  price={item.price}
                  title={item.title}
                />
              )}
            </div>
          ),
        )}
      </div>
    </div>
  )
}
