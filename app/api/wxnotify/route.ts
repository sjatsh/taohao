import { type NextRequest } from 'next/server'

import { getHash } from '@/lib/xunhu_pay'
import { getMaybeTransactionClient, prisma, startTransaction } from '@/prisma'
import { resend } from '@/lib/resend'
import { OrderEmail } from "@/module/emails/order"

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

  const order = await prisma.orders.findUnique({
    where: {
      order_id: orderId.toString(),
    },
    include: {
      product: true,
    },
  })

  if (!order) {
    return new Error("order not found")
  }

  try {
    await startTransaction(async () => {
      const p = getMaybeTransactionClient()
      const kami = JSON.parse(order.product.kami) as string[]

      if (kami.length < order.num) {
        return new Error("kami not enough")
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
  }
  catch (e: any) {
    console.error(e)
    return new Response(e, {
      status: 500,
    })
  }

  await resend.emails.send({
    from: 'admin@sjis.me',
    to: order.email,
    subject: '【淘号网】感谢您的购买，请查收您的收据',
    react: OrderEmail({
      title_text: '购买' + order.product.title,
      order_id: order.order_id,
      num: order.num,
      kami: order.kami,
      email: order.email,
    }),
  })

  return new Response('success', {
    status: 200,
  })
}
