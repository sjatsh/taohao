'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'

import { trpc } from '@/lib/trpc'
import { EncryptTransformer } from '@taohao/trpc-encrypt-transformer'
import { NEXT_PUBLIC_ENCRYPTION_KEY, NEXT_PUBLIC_SERVER_URL } from '@taohao/env/src/client'

const queryClient = new QueryClient()

const trpcClient = trpc.createClient({
  transformer: new EncryptTransformer(NEXT_PUBLIC_ENCRYPTION_KEY),
  links: [
    httpBatchLink({
      url: NEXT_PUBLIC_SERVER_URL,
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
