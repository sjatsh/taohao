import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TRPCError } from '@trpc/server'

import { router, trpc } from '../trpc'

import { prisma } from '@/prisma'
import { isLogin } from './middlewares/auth'

export const defaultProductSelect = {
  id: true,
  title: true,
  num: true,
  price: true,
  origin_price: true,
  image: true,
  pay_type: true,
} satisfies Prisma.productsSelect

export const products = router({
  list: trpc.procedure.query(async () => {
    return prisma.products.findMany({
      select: defaultProductSelect,
    })
  }),
  byId: trpc.procedure.input(z.number()).query(async ({ input }) => {
    const res = await prisma.products.findUnique({
      select: defaultProductSelect,
      where: {
        id: input,
      },
    })

    if (!res) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No post with id '${input}'`,
      })
    }
    return res
  }),
  create: trpc.procedure
    .use(isLogin)
    .input(
      z.object({
        password: z.string(),
        title: z.string(),
        num: z.number(),
        price: z.number(),
        origin_price: z.number(),
        image: z.string(),
        pay_type: z.string(),
        content: z.string(),
        kami: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const data = {
        num: input.num,
        price: input.price,
        origin_price: input.origin_price,
        image: input.image,
        pay_type: input.pay_type,
        content: input.content,
        kami: input.kami,
      }
      return prisma.products.upsert({
        create: {
          ...data,
          title: input.title,
        },
        update: data,
        where: {
          title: input.title,
        },
      })
    }),
})
