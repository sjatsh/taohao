'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import superjson from 'superjson'

import { trpc } from '@/lib/trpc'

const queryClient = new QueryClient()

const trpcClient = trpc.createClient({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: '/trpc',
    }),
  ],
})

export default function TrpcContext({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
