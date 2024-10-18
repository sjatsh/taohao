'use client'

import type { Router } from '@taohao/server/src/routers/index'

import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<Router>()
