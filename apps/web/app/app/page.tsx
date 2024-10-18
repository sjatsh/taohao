'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from '@nextui-org/react'

export default function Page() {
  return (
    <Table selectionMode="single">
      <TableHeader>
        <TableColumn>应用名称</TableColumn>
        <TableColumn>介绍</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
            <Link download={true} href="https://t.qsxzz.com/gwapp/twitter.apk">
              Twitter（推特）
            </Link>
          </TableCell>
          <TableCell>全球最火的社交网络应用</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>全球最火的短视频应用程序</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>全球最大的视频分享应用</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>全球安装最多的浏览器</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
