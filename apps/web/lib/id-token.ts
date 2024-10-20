import { randomUUID } from 'node:crypto'
import { adapter } from '@/lib/auth-adapter'
import { prisma } from '@taohao/prisma'
import { add } from 'date-fns'
import { z } from 'zod'

export const idTokenParam = z.object({
  idToken: z.string(),
  code: z.string(),
})

export const idTokenResult = z
  .object({
    providerAccountId: z.string(),
    provider: z.enum(['apple', 'google']),
    email: z.string().optional().nullable(),
    type: z.enum(['oauth']),
  })
  .passthrough()

export const openidConfig = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to ${url}`)
  }
  return (await response.json()) as Promise<{ jwks_uri: string }>
}

export const createUserSession = async (userId: string) => {
  const session = await adapter.createSession?.({
    userId,
    sessionToken: randomUUID(),
    expires: add(Date.now(), {
      days: 30,
    }),
  })
  if (!session) {
    throw new Error('Failed to create session for existing user')
  }
  return session
}

export async function findSessionToken(sessionToken: string) {
  return await prisma.session.findUnique({
    where: {
      sessionToken,
    },
    include: {
      user: true,
    },
  })
}

export async function findUserByName(name: string, password: string) {
  let user =  await prisma.user.findUnique({
    where: {
      name,
      password,
    },
  })
  if (!user) {
    return null
  }
  user.password = ''
  return user
}
