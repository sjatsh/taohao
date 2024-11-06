import { middleware } from '../../trpc'
import { TRPCError } from '@trpc/server'

export const isLogin = middleware(async (opts) => {
  const { ctx } = opts
  if (!ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    })
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  })
})
