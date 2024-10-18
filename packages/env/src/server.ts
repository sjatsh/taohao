import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const config = createEnv({
  server: {
    LOG_LEVEL: z.string(),
    XUNHU_PAY_APP_ID: z.string(),
    XUNHU_PAY_APP_SECRET: z.string(),
    XUNHU_PAY_API_URL: z.string().url(),
    XUNHU_PAY_WAP_URL: z.string().url(),
    XUNHU_PAY_WAP_NAME: z.string(),
    SITE_URL: z.string().url(),
    POSTGRES_PRISMA_URL: z.string().url(),
    RESEND_API_KEY: z.string(),
    BLOB_READ_WRITE_TOKEN: z.string(),
    NODE_ENV: z.enum(['development', 'production', 'test']),
    NEXTAUTH_SECRET: z.string(),
    ADMIN_PASSWORD: z.string(),
    ADMIN_EMAIL: z.string(),
  },
  experimental__runtimeEnv: process.env,
})

export const {
  LOG_LEVEL,
  XUNHU_PAY_APP_ID,
  XUNHU_PAY_APP_SECRET,
  XUNHU_PAY_API_URL,
  XUNHU_PAY_WAP_URL,
  XUNHU_PAY_WAP_NAME,
  SITE_URL,
  POSTGRES_PRISMA_URL,
  RESEND_API_KEY,
  BLOB_READ_WRITE_TOKEN,
  NODE_ENV,
  NEXTAUTH_SECRET,
  ADMIN_PASSWORD,
  ADMIN_EMAIL,
} = config
