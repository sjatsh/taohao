import type { TRPCErrorShape } from '@trpc/server/rpc'
import type { OpenApiMeta } from 'trpc-openapi'

import { initTRPC } from '@trpc/server'
import { ZodError } from 'zod'

import { NEXT_PUBLIC_ENCRYPTION_KEY } from '@taohao/env/src/client'
import { EncryptTransformer } from '@taohao/trpc-encrypt-transformer'

export interface AuthContext {
  user: {
    id: string
    name: string
    email: string
  }
  header: {
    'x-real-ip': string
  }
}

export const trpc = initTRPC
  .context<AuthContext>()
  .create({
    transformer: new EncryptTransformer(NEXT_PUBLIC_ENCRYPTION_KEY),
    errorFormatter: (opts) => {
      const { shape, error } = opts
      let res: TRPCErrorShape<number> & { name?: string } & {
        [key: string]: any
      }

      if (error.cause instanceof ZodError) {
        const firstCustomError = error.cause.issues.find(
          (issue) => issue.code === 'custom',
        )

        res = {
          ...shape,
          message: firstCustomError?.message || '参数错误',
          data: error.cause.flatten(),
        }
      } else {
        res = shape
      }

      return res
    },
  })

  export const openAPITRPC = initTRPC
  .meta<OpenApiMeta>()
  .context<AuthContext>()
  .create({
    errorFormatter: (opts) => {
      const { shape, error } = opts
      let res: TRPCErrorShape<number> & { name?: string } & {
        [key: string]: any
      }

      if (error.cause instanceof ZodError) {
        const firstCustomError = error.cause.issues.find(
          (issue) => issue.code === 'custom',
        )

        res = {
          ...shape,
          message: firstCustomError?.message || '参数错误',
          data: error.cause.flatten(),
        }
      } else {
        res = shape
      }

      return res
    },
  })


export const middleware = trpc.middleware

export const procedure = trpc.procedure

export const router = trpc.router

export const createCallerFactory = trpc.createCallerFactory
