import cuid from 'cuid'
import { MiddlewareHandler } from 'hono'
import { getPath } from 'hono/utils/url'

const consoleLog = console.log

const humanize = (times: string[]) => {
  const [delimiter, separator] = [',', '.']

  const orderTimes = times.map((v) =>
    v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + delimiter),
  )

  return orderTimes.join(separator)
}

const time = (start: number) => {
  const delta = Date.now() - start

  return humanize([
    delta < 1000 ? delta + 'ms' : Math.round(delta / 1000) + 's',
  ])
}

export const customerLog: MiddlewareHandler = async (c, next) => {
  const { method } = c.req
  const reqId = cuid()

  console.log = (...args: any[]) => {
    if (method === 'HEAD') {
      // 过滤存活探针日志
      return
    }
    consoleLog(reqId, ': ', ...args)
  }
  if (method === 'HEAD') {
  }
  const path = getPath(c.req as any)

  console.log('income', method, path)
  const start = Date.now()

  try {
    await next()
  } catch (e) {
    console.log('error', method, path, c.res.status || 500, time(start))
    throw e
  }

  console.log('outcome', method, path, c.res.status, time(start))
}
