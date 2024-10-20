import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'
import { router } from '@taohao/server/src/routers/index'
import { IP_HEADER_NAME } from '@/types/constants'
import { findUserByAuthToken } from '@/lib/trpc-user-context'
import { auth } from '../api/auth/[[...nextauth]]/auth'

const trpc = new Hono()

trpc.use(
  trpcServer({
    router,
    async createContext(opts) {
      const header = {
        'x-real-ip': opts.req.headers.get(IP_HEADER_NAME),
      }

      if (opts.req.headers.has('authorization')) {
        const authToken = (opts.req.headers.get('authorization') || '').replace(
          'Bearer ',
          '',
        )
        return {
          user: (await findUserByAuthToken(authToken))?.user,
          header,
        }
      }

      const session = await auth()
      return {
        user: session?.user,
        header,
      }
    },
  }),
)

export default trpc
