import type { Prisma } from '@taohao/prisma'
import { prisma } from '@taohao/prisma'

import { z } from 'zod'

import { router, trpc } from '../trpc'

import { isLogin } from './middlewares/auth'

export const defaultProductSelect = {
  id: true,
  title: true,
  num: true,
  price: true,
  origin_price: true,
  image: true,
  pay_type: true
} satisfies Prisma.productsSelect

export const products = router({
  list: trpc.procedure
    .query(async ({ ctx }) => {
      if (ctx.user) {
        return prisma.products.findMany({
          orderBy: {
            id: 'asc'
          }
        })
      }
      return prisma.products.findMany({
        select: defaultProductSelect,
        orderBy: {
          id: 'asc'
        }
      })
    }),
  byId: trpc.procedure.input(z.number()).query(async ({ input }) => {
    return prisma.products.findUnique({
      select: defaultProductSelect,
      where: {
        id: input
      }
    })
  }),
  create: trpc.procedure
    .use(isLogin)
    .input(z.object({
        id: z.number().optional(),
        title: z.string(),
        num: z.number(),
        price: z.number(),
        origin_price: z.number(),
        image: z.string(),
        pay_type: z.string(),
        content: z.string(),
        kami: z.string(),
        keywords: z.string()
      })
    )
    .mutation(async ({ input }) => {
      let data = { ...input }
      delete data.id
      return prisma.products.upsert({
        create: data,
        update: data,
        where: {
          id: input.id
        }
      })
    })
})
