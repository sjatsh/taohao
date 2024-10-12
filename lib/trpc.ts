'use client'

import type { Router } from '@/server/routers'

import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<Router>()
