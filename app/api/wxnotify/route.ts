import { type NextRequest } from 'next/server'

import { getHash } from '@/lib/xunhu_pay'
import { getMaybeTransactionClient, startTransaction } from '@/prisma'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  let params: { [key: string]: string } = {}

  formData.forEach(function (value, key) {
    if (typeof value !== 'string') {
      return
    }
    params[key] = value
  })
  if (formData.get('hash') !== getHash(params)) {
    return new Response('hash error', {
      status: 400,
    })
  }

  const orderId = formData.get('trade_order_id')

  if (!orderId) {
    return new Response('order_id error', {
      status: 400,
    })
  }

  await startTransaction(async () => {
    const p = getMaybeTransactionClient()
    const order = await p.orders.findUnique({
      where: {
        order_id: orderId.toString(),
      },
      include: {
        product: true,
      },
    })

    if (!order) {
      return new Response('order not found', {
        status: 400,
      })
    }
    const kami = JSON.parse(order.product.kami) as string[]

    if (kami.length < order.num) {
      return new Response('kami not enough', {
        status: 500,
      })
    }
    const restKami = kami.slice(0, order.num)

    await p.orders.updateMany({
      where: {
        order_id: orderId.toString(),
      },
      data: {
        status: 1,
        kami: restKami.join('\n'),
      },
    })
    await p.products.updateMany({
      where: {
        id: order.product_id,
      },
      data: {
        num: order.product.num - order.num,
        kami: JSON.stringify(kami.slice(order.num, kami.length)),
      },
    })
  })

  return new Response('success', {
    status: 200,
  })
}
