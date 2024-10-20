'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = useSession()
    if (session.status !== 'authenticated') {
        return redirect('/api/auth/signin')
    }
    return <>{children}</>
}