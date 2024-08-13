'use client'

import NextLink from 'next/link'

import { OrderCard } from '@/app/components/order'
import Announcement from '@/app/components/announcement'
import { trpc } from '@/lib/trpc'

export default function Home() {
  const { data: products } = trpc.products.listNoAuth.useQuery()

  return (
    <>
      <Announcement />
      <div className="mt-5 grid grid-cols-5">
        {products?.map(
          (item: {
            id: number
            num: number
            image: string
            price: number
            title: string
          }) => (
            <>
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
            </>
          ),
        )}
      </div>
    </>
  )
}
