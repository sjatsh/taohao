import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const config = createEnv({
  client: {
    NEXT_PUBLIC_ENCRYPTION_KEY: z
      .string()
      .length(64)
      .regex(/^[0-9a-fA-F]+$/)
      .optional(),
    NEXT_PUBLIC_SERVER_URL: z.string().optional().default('/trpc'),
    NEXT_PUBLIC_SITE_URL: z.string().optional().default('http://localhost:3000')
  },
  runtimeEnv: {
    NEXT_PUBLIC_ENCRYPTION_KEY: process.env.NEXT_PUBLIC_ENCRYPTION_KEY,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
  }
})

export const {
  NEXT_PUBLIC_ENCRYPTION_KEY,
  NEXT_PUBLIC_SERVER_URL,
  NEXT_PUBLIC_SITE_URL
} = config
