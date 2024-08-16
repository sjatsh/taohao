import React, { cache } from 'react'
import Markdown from 'react-markdown'

import { prisma } from '@/prisma'
import { siteConfig } from '@/config/site';

export const metadata = {
  title: "账号购买",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const content = await getContent(params.id)

  return (
    <>
      <p className="pb-8 pl-4 text-lg font-bold text-gray-500">商品详情</p>
      <div className="flex flex-wrap">
        <div className="mb-5 mr-5 w-[65%] min-w-[360px] rounded-md border p-10 shadow-xl">
          <div
            className={`prose-h1:text-green prose-strong:text-blue prose-ul:text-dark prose prose-h1:text-4xl prose-p:text-base prose-ul:list-decimal`}
          >
            <Markdown>{content}</Markdown>
          </div>
        </div>
        <div className="sticky top-20 w-[30%] min-w-[360px] self-start">
          <div className="rounded-md border p-4 shadow-xl">{children}</div>
        </div>
      </div>
    </>
  )
}

const getContent = cache(async (id: string) => {
  'use server'
  const res = await prisma.products.findUnique({
    select: { content: true },
    where: { id: parseInt(id) },
  })

  return res?.content ? res.content : ''
})
