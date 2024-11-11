import { trpcServer } from '@hono/trpc-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { router } from './routers/index.js'
import { customerLog } from './routers/middlewares/log.js'

const app = new Hono()

app.use('*', customerLog)
app.use('*', async (c, next) => {
  const corsMiddleware = cors({
    origin: "http://localhost:3000",
    allowMethods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
  return await corsMiddleware(c, next)
})
app.use(
  '/trpc/*',
  trpcServer({
    router,
  }),
)

export default app
