import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap">
    <div className="mb-5 mr-5 w-[65%] min-w-[360px] max-w-[800px] rounded-md border p-10 shadow-xl">
      <p className={"mb-10"}>
        目前我们上线了全球最火、最热门的国外 APP供大家 免费下载。因为是刚开始涉及这一块，目前还不能完整的提供一些软件的分类，因此您需要仔细的找一找。
      </p>

      {children}
    </div>
    <div className="sticky top-20 w-[30%] max-w-[360px] self-start">
      <div className="rounded-md border p-4 shadow-xl">
        <p className="mb-5">最近更新</p>
      </div>
    </div>
  </div>
}
