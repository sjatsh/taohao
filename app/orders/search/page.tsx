'use client'

import React, { useMemo } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import NextLink from 'next/link'

export default function Page() {
  const [email, setEmail] = React.useState('')
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  const emailIsInvalid = useMemo(() => {
    if (email === '') return false

    return !validateEmail(email)
  }, [email])

  const [orderId, setOrderId] = React.useState('')

  return (
    <>
      <p className="pb-8 pl-4 text-lg font-bold text-gray-500">查询订单</p>
      <div className="mb-10 rounded-md border px-6 py-6 shadow-xl">
        <p className="text-small text-gray-500">
          注意：最多只能查询近5笔订单。
        </p>
      </div>
      <div className="rounded-md border px-6 py-6 shadow-xl">
        <Tabs
          key={email + orderId}
          aria-label="订单查询"
          color="primary"
          variant="underlined"
        >
          <Tab key="email" title="邮箱">
            <div className="mb-3">
              <p className="text-small text-gray-500">邮箱</p>
            </div>
            <div className="mb-3">
              <Input
                color={emailIsInvalid ? 'danger' : 'default'}
                errorMessage="Please enter a valid email"
                isInvalid={emailIsInvalid}
                type="email"
                value={email}
                variant={'bordered'}
                onValueChange={setEmail}
              />
            </div>
            <div>
              <NextLink
                className={`${email === '' ? 'pointer-events-none' : ''}`}
                href={`/orders/detail?email=${email}`}
              >
                <Button className="mr-2" color="primary" size="sm">
                  查询
                </Button>
              </NextLink>
              <Button
                color="primary"
                size="sm"
                onClick={() => {
                  setEmail('')
                }}
              >
                重置
              </Button>
            </div>
          </Tab>
          <Tab key="order_num" title="订单">
            <div className="mb-3">
              <p className="text-small text-gray-500">订单号</p>
            </div>
            <div className="mb-3">
              <Input
                type="text"
                value={orderId}
                variant={'bordered'}
                onValueChange={setOrderId}
              />
            </div>
            <div>
              <NextLink
                className={`${orderId === '' ? 'pointer-events-none' : ''}`}
                href={`/orders/detail?order_id=${orderId}`}
              >
                <Button className="mr-2" color="primary" size="sm">
                  查询
                </Button>
              </NextLink>
              <Button
                color="primary"
                size="sm"
                onClick={() => {
                  setOrderId('')
                }}
              >
                重置
              </Button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
