import React, { cache } from "react";
import Markdown from "react-markdown";
import { prisma } from "@/prisma";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const content = await getContent(params.id);

  return (
    <>
      <p className="pb-8 pl-4 text-gray-500 text-lg font-bold">商品详情</p>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-5 border rounded-md shadow-xl p-10">
          <div
            className={`prose prose-h1:text-4xl prose-h1:text-green prose-p:text-base prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark`}
          >
            <Markdown>{content}</Markdown>
          </div>
        </div>
        <div className="sticky top-20 col-span-2 border rounded-md shadow-xl p-4 h-96 max-h-max">
          <div className="grid-rows-subgrid">{children}</div>
        </div>
      </div>
    </>
  );
}

const getContent = cache(async (id: string) => {
  "use server";
  const res = await prisma.products.findUnique({
    select: { content: true },
    where: { id: parseInt(id) },
  });
  return res?.content ? res.content : "";
});
