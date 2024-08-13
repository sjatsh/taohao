import React from 'react'

import NextAuthSessionProvider from '@/context/next-auth'
import { useSession, signIn, signOut } from 'next-auth/react'

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
