import React from 'react'
import { prisma } from '@taohao/prisma'

import { DetailPage } from '@/module/orders/detail'

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
      {orders.map((order) => (
        <div key={order.id} className="my-5">
          <DetailPage
            props={{
              ...order,
            }}
          />
        </div>
      ))}
    </div>
  )
}
