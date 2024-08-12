import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const config = createEnv({
  server: {
    XUNHU_PAY_APP_ID: z.string(),
    XUNHU_PAY_APP_SECRET: z.string(),
    XUNHU_PAY_API_URL: z.string().url(),
    XUNHU_PAY_WAP_URL: z.string().url(),
    XUNHU_PAY_WAP_NAME: z.string(),
    SITE_URL: z.string().url(),
    POSTGRES_PRISMA_URL: z.string().url(),
    RESEND_API_KEY: z.string(),
  },
  experimental__runtimeEnv: process.env,
})

export const {
  XUNHU_PAY_APP_ID,
  XUNHU_PAY_APP_SECRET,
  XUNHU_PAY_API_URL,
  XUNHU_PAY_WAP_URL,
  XUNHU_PAY_WAP_NAME,
  SITE_URL,
  POSTGRES_PRISMA_URL,
  RESEND_API_KEY,
} = config
