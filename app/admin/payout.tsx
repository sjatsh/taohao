import React from 'react'
import { useSession } from 'next-auth/react'

import NextAuthSessionProvider from '@/context/next-auth'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession()

  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  )
}
