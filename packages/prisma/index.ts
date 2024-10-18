import { AsyncLocalStorage } from 'node:async_hooks'
import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import type { ITXClientDenyList, Types } from '@prisma/client/runtime/library'
import { logger } from '@taohao/logger'

export * from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  })
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

export const prisma: PrismaClient =
  globalThis.prismaGlobal || prismaClientSingleton()

if (!globalThis.prismaGlobal && process.env.NODE_ENV === 'production') {
  // @ts-expect-error it works
  prisma.$on('query', (e: any) => {
    logger.info({ query: e.query, params: e.params, duration: e.duration })
  })
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  globalThis.prismaGlobal = prisma
}

type TransactionClient = Omit<PrismaClient, ITXClientDenyList>
type Callback<R> = (prisma: TransactionClient) => Types.Utils.JsPromise<R>
type Options = {
  maxWait?: number
  timeout?: number
  isolationLevel?: Prisma.TransactionIsolationLevel
}

const transactionStorage = new AsyncLocalStorage<TransactionClient>()

export function startTransaction<R>(
  callback: Callback<R>,
  options?: Options,
): Types.Utils.JsPromise<R> {
  return prisma.$transaction((prisma) =>
    transactionStorage.run(prisma, () => callback(prisma)),
  )
}

export function getMaybeTransactionClient() {
  return transactionStorage.getStore() || prisma
}

export function maybeTransaction<R>(
  callback: Callback<R>,
  options?: Options,
): Types.Utils.JsPromise<R> {
  const client = transactionStorage.getStore()
  if (client) {
    return callback(client)
  } else {
    return prisma.$transaction(async (prisma) => {
      return transactionStorage.run(prisma, () => {
        return callback(prisma)
      })
    }, options)
  }
}
