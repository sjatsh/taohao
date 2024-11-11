import React from 'react'
import Markdown from 'react-markdown'
import { Metadata, ResolvedMetadata, ResolvingMetadata } from 'next'
import { prisma } from '@taohao/prisma'

import { siteConfig } from '@/config/site'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata | ResolvedMetadata> {
  const res = await prisma.products.findUnique({
    select: { title: true, content: true, image: true, keywords: true },
    where: { id: parseInt(params.id) },
  })

  if (!res) {
    throw new Error('Product not found')
  }
  const title = '购买' + res.title
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: title + ' | ' + siteConfig.title,
    description: res.content,
    keywords: JSON.parse(res.keywords),
    icons: res.image,
    twitter: {
      ...siteConfig.twitter,
      title: title,
      description: title,
      images: [res.image, ...previousImages],
    },
    openGraph: {
      images: [res.image, ...previousImages],
      url: `${siteConfig.url}${siteConfig.pages.orders.buy}/${params.id}`,
      title: title,
    },
  }
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const res = await prisma.products.findUnique({
    select: { content: true },
    where: { id: parseInt(params.id) },
  })
  const content = res?.content ? res.content : ''

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
