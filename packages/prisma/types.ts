import type { Prisma, PrismaClient } from '@prisma/client'

export * from './generated/zod/modelSchema'

export type PrismaClientType =
  | PrismaClient
  | Omit<
      Prisma.TransactionClient,
      '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
    >
