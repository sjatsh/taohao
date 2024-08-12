'use client'

import React, { Suspense, useState } from 'react'
import { Button } from '@nextui-org/button'
import toast from 'react-hot-toast'
import { Textarea } from '@nextui-org/input'

export const DetailPage: React.FC<{
  props: {
    order_id: string
    product_id: number
    num: number
    email: string
    price: number
    status: number
    kami: string
    payment: string
    created_at: Date
    product: {
      title: string
      pay_type: string
    }
  }
}> = ({ props }) => {
  return (
    <Suspense>
      <div className="mb-3 flex">
        <Button
          className="mx-5"
          color="primary"
          variant="bordered"
          onClick={async () => {
            await navigator.clipboard.writeText(props.order_id)
            toast.success('单号已复制')
          }}
        >
          <p className="font-bold text-blue-600"> 订单号：{props.order_id}</p>
        </Button>
      </div>

      <div className="grid grid-cols-3 rounded-md border px-6 py-6 shadow-xl">
        <div className="col-span-1">
          <p className="my-2 text-sm text-gray-500">
            订单名称：购买{props.product.title}
          </p>
          <p className="my-2 text-sm text-gray-500">下单数量：{props.num}</p>
          <p className="my-2 text-sm text-gray-500">
            下单时间：{props.created_at?.toLocaleString()}
          </p>
          <p className="my-2 text-sm text-gray-500">邮箱：{props.email}</p>
          <p className="my-2 text-sm text-gray-500">
            订单类型：{props.product.pay_type}
          </p>
          <p className="my-2 text-sm text-gray-500">
            订单总价：{props.price * props.num}
          </p>
          <div className="my-2 flex">
            <p className="text-sm text-gray-500">订单状态：</p>
            {props.status === 1 ? (
              <p className="text-green-500">已完成</p>
            ) : (
              <p className="text-red-500">等待支付</p>
            )}
          </div>
          <p className="my-2 text-sm text-gray-500">
            支付方式：{props.payment}
          </p>
        </div>
        <div className="col-span-2">
          <p className="my-2 text-sm text-gray-500">卡密</p>
          <Textarea
            disableAnimation
            disableAutosize
            classNames={{
              base: 'full-width my-2',
              input: 'min-h-[150px]',
            }}
            value={props.kami}
            variant="bordered"
          />
          <div className="float-right">
            <Button
              color="primary"
              variant="bordered"
              onClick={async () => {
                await navigator.clipboard.writeText(props.kami)
                toast.success('卡密已复制')
              }}
            >
              复制卡密
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
