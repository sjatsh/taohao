'use client'
import { createTRPCReact } from '@trpc/react-query'
import type {Router} from "@/server/routers";

export const trpc = createTRPCReact<Router>()
