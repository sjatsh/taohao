import React from 'react'

import { DetailPage } from '@/module/orders/detail'
import { prisma } from '@/prisma'

export default async function Page({
  searchParams,
}: {
  searchParams: {
    order_id: string
    email: string
  }
}) {
  const orders = await prisma.orders.findMany({
    where: searchParams.order_id
      ? {
          order_id: searchParams.order_id,
        }
      : {
          email: searchParams.email,
        },
    include: {
      product: true,
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 5,
  })

  if (orders.length === 0) {
    return <div className="ml-3 text-red-500">订单不存在</div>
  }

  return (
    <div>
      {orders.map((order, index) => (
        <div key={index} className="my-5">
          <DetailPage
            key={index}
            props={{
              ...order,
            }}
          />
        </div>
      ))}
    </div>
  )
}
