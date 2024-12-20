import { type NextRequest, NextResponse } from 'next/server'

import { getMaybeTransactionClient, prisma, startTransaction } from '@taohao/prisma'
import { API_KEY } from '@taohao/env/src/server'
import { NEXT_PUBLIC_SITE_URL } from '@taohao/env/src/client'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  let params: { [key: string]: string } = {}

  formData.forEach(function (value, key) {
    if (typeof value !== 'string') {
      return
    }
    params[key] = value
  })
  const key = formData.get('key')

  if (key !== API_KEY) {
    return NextResponse.json(
      { success: false, message: 'key error' },
      { status: 200 }
    )
  }

  const productId = formData.get('product_id')
  const orderId = formData.get('order_id')
  const from = formData.get('from')

  if (!orderId || !key || !productId || !from) {
    return NextResponse.json(
      { success: false, message: 'params error' },
      { status: 200 }
    )
  }

  const product = await prisma.products.findUnique({
    where: {
      id: Number(productId.toString())
    }
  })

  if (!product) {
    return NextResponse.json(
      { success: false, message: 'product not found' },
      { status: 200 }
    )
  }

  const kami = JSON.parse(product.kami) as string[]
  const orderNum = 1

  if (kami.length < orderNum) {
    return NextResponse.json(
      { success: false, message: 'kami not enough' },
      { status: 200 }
    )
  }
  const restKami = kami.slice(0, orderNum)
  const restKamiStr = restKami.join('\n')

  try {
    await startTransaction(async () => {
      const p = getMaybeTransactionClient()

      await p.orders.create({
        data: {
          order_id: orderId.toString(),
          product_id: Number(productId.toString()),
          num: orderNum,
          price: product.price,
          email: '',
          payment: from.toString(),
          status: 1,
          kami: restKamiStr
        }
      })

      const kamiPaid = JSON.stringify(kami.slice(orderNum, kami.length))

      await p.products.updateMany({
        where: {
          id: product.id
        },
        data: {
          num: product.num - orderNum,
          kami: kamiPaid
        }
      })
    })
  } catch (e) {
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 200 }
    )
  }

  return NextResponse.json(
    {
      success: true,
      kami: restKamiStr,
      desc: NEXT_PUBLIC_SITE_URL + '/orders/buy/' + productId
    },
    { status: 200 }
  )
}
