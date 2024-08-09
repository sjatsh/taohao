'use client'

import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { Button } from '@nextui-org/button'
import toast from 'react-hot-toast'
import { Input } from '@nextui-org/input'
import { Image, Modal, ModalBody, ModalContent, ModalHeader, Skeleton, useDisclosure, } from '@nextui-org/react'
import { redirect } from 'next/navigation'

import { WeiXin } from '@/app/components/icons'
import { trpc } from '@/lib/trpc'

export default function Page({ params }: { params: { id: string } }) {
  const { data: product } = trpc.products.byId.useQuery(parseInt(params.id))

  useEffect(() => {
    if (!product) return
    setLoaded(true)
  }, [product])

  const [email, setEmail] = React.useState('')
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  const emailIsInvalid = useMemo(() => {
    if (email === '') return false

    return !validateEmail(email)
  }, [email])

  const [num, setNum] = React.useState('1')
  const validateNum = (value: string) => value.match(/^[1-9]\d*$/i)
  const numIsInvalid = useMemo(() => {
    if (num === '') return false

    return !validateNum(num)
  }, [num])

  const [payment, setPayment] = React.useState('微信')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [qrCodeUrl, setQrcodeUrl] = React.useState('')
  const orderCreate = trpc.orders.create.useMutation()
  const orderFind = trpc.orders.find.useMutation()
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

  useEffect(() => {
    orderCreate.error && toast.error(orderCreate.error.message)
    if (orderCreate.data) {
      setQrcodeUrl(orderCreate.data.qrcode_url)
      orderFind.mutate(orderCreate.data.order_id)
    }
  }, [orderCreate.data, orderCreate.error])

  useEffect(() => {
    if (!orderFind.data) {
      return
    }
    switch (orderFind.data.status) {
      case 0:
        sleep(3000).then(() => {
          orderFind.mutate(orderFind.data!.order_id)
        })
        break
      case 1:
        onClose()

        return redirect(`/orders/detail?order_id=${orderFind.data.order_id}`)
      default:
        break
    }
  }, [orderFind.data])

  const submitOnClick = async () => {
    if (email === '' || emailIsInvalid) {
      toast.error('请输入有效的邮箱')

      return
    }
    if (
      num === '' ||
      numIsInvalid ||
      parseInt(num) < 1 ||
      parseInt(num) > 20 ||
      parseInt(num) > product!.num
    ) {
      if (parseInt(num) > product!.num) {
        toast.error('库存不足')
      } else {
        toast.error('请输入有效的数量')
      }

      return
    }
    onOpen()

    orderCreate.mutate({
      product_id: parseInt(params.id),
      num: parseInt(num),
      email: email,
      payment: payment,
    })
  }

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <PaymentDialog
        isOpen={isOpen}
        price={product?.price}
        qrCodeUrl={qrCodeUrl}
        onClose={onClose}
      />
      <Suspense>
        <Skeleton isLoaded={loaded}>
          <div>
            <p className="text-2xl font-medium text-gray-900">
              购买{product?.title}
            </p>
          </div>
        </Skeleton>
        <div className="my-1">
          <Skeleton isLoaded={loaded}>
            <Button
              className="m-0.5 h-5 min-w-5 gap-2 rounded-small p-2 text-tiny"
              color="primary"
              variant="bordered"
            >
              {product?.pay_type}
            </Button>
            <Button
              className="m-0.5 h-5 min-w-5 gap-2 rounded-small p-2 text-tiny"
              color="primary"
              variant="bordered"
            >
              库存({product?.num})
            </Button>
            <Button
              className="m-0.5 h-5 min-w-5 gap-2 rounded-small p-2 text-tiny"
              color="default"
              variant="bordered"
            >
              限购(20)
            </Button>
          </Skeleton>
        </div>
        <Skeleton isLoaded={loaded}>
          <div className="my-2 flex items-end">
            <p className="text-xl font-medium text-red-600">
              ￥ {product?.price}
            </p>
            <p
              className={`ml-1 text-tiny line-through ${!product?.origin_price ? 'disabled' : ''}`}
            >
              ￥ {product?.origin_price}
            </p>
          </div>
        </Skeleton>
      </Suspense>

      <div className="my-1">
        <Input
          color={emailIsInvalid ? 'danger' : 'default'}
          errorMessage="Please enter a valid email"
          isInvalid={emailIsInvalid}
          label="邮箱"
          placeholder="接收卡密或通知"
          type="email"
          variant={'bordered'}
          onValueChange={setEmail}
        />
      </div>
      <div className="my-1">
        <Input
          color={numIsInvalid ? 'danger' : 'default'}
          defaultValue="1"
          errorMessage="Please enter a valid number"
          isInvalid={numIsInvalid}
          label="数量"
          max={product?.num}
          min="1"
          type="number"
          variant={'bordered'}
          onValueChange={setNum}
        />
      </div>
      <div className="my-0.5">
        <p className="ml-1 text-tiny text-gray-600">支付方式</p>
      </div>
      <div className="my-0.5">
        <Button
          color={payment === '微信' ? 'primary' : 'default'}
          startContent={<WeiXin />}
          variant="bordered"
          onSelect={() => {
            setPayment('微信')
          }}
        >
          微信
        </Button>
      </div>
      <div className="grid grid-rows-subgrid">
        <div className="grid grid-cols-3">
          <div className="col-start-2 grid place-items-center">
            <Button color="danger" isLoading={isOpen} onClick={submitOnClick}>
              提交订单
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

function PaymentDialog({
  isOpen,
  onClose,
  price,
  qrCodeUrl,
}: {
  isOpen: boolean
  onClose: () => void
  price?: number
  qrCodeUrl: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Modal isOpen={isOpen} size="xs" onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          付款金额:
          <p className="text-xl font-medium text-red-600"> ￥{price}</p>
        </ModalHeader>
        <Skeleton isLoaded={loaded}>
          <ModalBody className="min-h-[288px] min-w-[320px] items-center">
            <Image
              src={qrCodeUrl}
              onLoad={() => {
                setLoaded(true)
              }}
            />
          </ModalBody>
        </Skeleton>
      </ModalContent>
    </Modal>
  )
}
