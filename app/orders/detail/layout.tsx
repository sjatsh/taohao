import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="pb-8 pl-4 text-lg font-bold text-gray-500">订单详情</p>
      {children}
    </>
  )
}
