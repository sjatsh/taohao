import { ADMIN_PASSWORD } from '@/env/server'
import IndexPage from '.'
import { redirect } from 'next/navigation'

export default function Page({
  searchParams,
}: {
  searchParams: {
    password: string
  }
}) {
  if (searchParams.password != ADMIN_PASSWORD) {
    redirect('/')
  }

  return <IndexPage password={ADMIN_PASSWORD} />
}
