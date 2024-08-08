import {initTRPC} from '@trpc/server'
import type {TRPCErrorShape} from '@trpc/server/rpc'
import superjson from 'superjson'
import type {OpenApiMeta} from 'trpc-openapi'
import {ZodError} from 'zod'

export interface AuthContext {
}

export const trpc = initTRPC.meta<OpenApiMeta>().context<AuthContext>().create({
    transformer: superjson,
    errorFormatter: (opts) => {
        const {shape, error} = opts
        let res: TRPCErrorShape<number> & { name?: string } & { [key: string]: any }
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
