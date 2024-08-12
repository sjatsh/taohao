import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'

import { router } from '@/server/routers'

const trpc = new Hono()

trpc.use(
  trpcServer({
    router,
    async createContext() {
      return {}
    },
  }),
)

export default trpc
