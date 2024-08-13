import { TRPCError } from '@trpc/server'
import { middleware } from '../../trpc'
import { ADMIN_PASSWORD } from '@/env/server'

export const isLogin = middleware(async (opts) => {
  // @ts-ignore
  const authed = opts.rawInput?.password === ADMIN_PASSWORD
  return opts.next({
    ctx: {
      authed: authed,
    },
  })
})
