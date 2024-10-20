import type { Prisma } from '@taohao/prisma'

import { z } from 'zod'

import { router, trpc } from '../trpc'

import { isLogin } from './middlewares/auth'

import { prisma } from '@taohao/prisma'

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
  list: trpc.procedure
    .mutation(async ({ ctx }) => {
      if (ctx.user) {
        return prisma.products.findMany()
      }
      return prisma.products.findMany({
        select: defaultProductSelect,
      })
    }),
  listNoAuth: trpc.procedure.query(async () => {
    return prisma.products.findMany({
      select: defaultProductSelect,
    })
  }),
  byId: trpc.procedure.input(z.number()).query(async ({ input }) => {
    return prisma.products.findUnique({
      select: defaultProductSelect,
      where: {
        id: input,
      },
    })
  }),
  create: trpc.procedure
    .use(isLogin)
    .input(
      z.object({
        id: z.number().optional(),
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
      let data = { ...input }
      delete data.id
      return prisma.products.upsert({
        create: data,
        update: data,
        where: {
          id: input.id,
        },
      })
    }),
})
