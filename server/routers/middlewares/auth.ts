import { TRPCError } from '@trpc/server'
import { middleware } from '../../trpc'
import { ADMIN_PASSWORD } from '@/env/server'

export const isLogin = middleware(async (opts) => {
  const { ctx } = opts

  // @ts-ignore
  if (opts.rawInput?.password != ADMIN_PASSWORD) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    })
  }
  return opts.next({
    ctx: {
      // user: ctx.user,
    },
  })
})
