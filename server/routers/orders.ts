import cuid from 'cuid'
import { z } from 'zod'

import { router, trpc } from '../trpc'

import { prisma } from '@/prisma'
import { wxPay } from '@/lib/xunhu_pay'

export const orders = router({
  byOrderId: trpc.procedure.input(z.string()).query(async ({ input }) => {
    return prisma.orders.findFirst({
      where: {
        order_id: input,
      },
    })
  }),
  create: trpc.procedure
    .input(
      z.object({
        product_id: z.number(),
        num: z.number(),
        email: z.string(),
        payment: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const product = await prisma.products.findUnique({
        where: {
          id: input.product_id,
        },
      })

      if (!product) {
        throw new Error('product not found')
      }
      const order_id = cuid()
      const res = await prisma.orders.create({
        data: {
          order_id: order_id,
          product_id: input.product_id,
          num: input.num,
          price: product.price,
          email: input.email,
          payment: input.payment,
          kami: '',
        },
      })
      const createWxPayRes = await wxPay({
        order_id: order_id,
        money: product.price * input.num,
        title: product.title,
      })

      return {
        order_id: res.order_id,
        qrcode_url: createWxPayRes.url_qrcode,
      }
    }),
  find: trpc.procedure.input(z.string()).mutation(async ({ input }) => {
    return prisma.orders.findFirst({
      where: {
        order_id: input,
      },
    })
  }),
})
