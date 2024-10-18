import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@taohao/prisma'

export const adapter = PrismaAdapter(prisma)
