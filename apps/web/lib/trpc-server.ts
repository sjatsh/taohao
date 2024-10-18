import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { Router } from '@taohao/server/src/routers/index'
import { EncryptTransformer } from '@taohao/trpc-encrypt-transformer'
import { NEXT_PUBLIC_ENCRYPTION_KEY } from '@taohao/env/src/client'

export const trpcServer = createTRPCProxyClient<Router>({
  transformer: new EncryptTransformer(NEXT_PUBLIC_ENCRYPTION_KEY),
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
}) as any
