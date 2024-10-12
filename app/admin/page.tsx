import { redirect } from 'next/navigation'

import IndexPage from '.'

import { ADMIN_PASSWORD } from '@/env/server'

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
