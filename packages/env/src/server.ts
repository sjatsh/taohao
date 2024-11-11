import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const config = createEnv({
  server: {
    LOG_LEVEL: z.string().optional().default('info'),
    XUNHU_PAY_APP_ID: z.string(),
    XUNHU_PAY_APP_SECRET: z.string(),
    XUNHU_PAY_API_URL: z.string().url(),
    XUNHU_PAY_WAP_URL: z.string().url(),
    XUNHU_PAY_WAP_NAME: z.string(),
    RESEND_API_KEY: z.string(),
    NODE_ENV: z.enum(['test', 'development', 'production']),
    ADMIN_EMAIL: z.string(),
    API_KEY: z.string().optional().default(''),
    NEXTAUTH_URL: z.string(),
    NEXTAUTH_SECRET: z.string()
  },
  experimental__runtimeEnv: process.env
})

export const {
  LOG_LEVEL,
  XUNHU_PAY_APP_ID,
  XUNHU_PAY_APP_SECRET,
  XUNHU_PAY_API_URL,
  XUNHU_PAY_WAP_URL,
  XUNHU_PAY_WAP_NAME,
  RESEND_API_KEY,
  NODE_ENV,
  ADMIN_EMAIL,
  API_KEY,
  NEXTAUTH_URL,
  NEXTAUTH_SECRET
} = config
