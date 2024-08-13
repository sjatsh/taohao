'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function NextAuthSessionProvider({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session | null
}) {
  return (
    <SessionProvider
      refetchOnWindowFocus={false}
      refetchInterval={60 * 60}
      session={session}
    >
      {children}
    </SessionProvider>
  )
}
