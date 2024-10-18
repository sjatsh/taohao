import { redirect } from 'next/navigation'
import { ADMIN_PASSWORD } from '@taohao/env/src/server'

import IndexPage from '.'

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
