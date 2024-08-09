import { handle } from 'hono/vercel'

import trpc from '@/app/trpc/app'

export const maxDuration = 300

export const GET = handle(trpc)
export const POST = handle(trpc)
