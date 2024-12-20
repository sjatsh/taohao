'use client'

import type { PutBlobResult } from '@vercel/blob'

import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  Avatar,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
  Select,
  SelectItem,
  Tab,
  Tabs,
  Textarea,
  useDisclosure
} from '@nextui-org/react'
import Markdown from 'react-markdown'
import { Button } from '@nextui-org/button'
import { Content, Mode, OnChangeStatus, TextContent } from 'vanilla-jsoneditor'
import toast from 'react-hot-toast'
import { products } from '@prisma/client'

import JSONEditorReact from './jsoneditor'

import { trpc } from '@/lib/trpc'

export default function Page() {
  const [content, setContent] = React.useState(<div />)

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <ListBoxWrapper>
          <Listbox
            aria-label="Admin Menu"
            selectionMode="single"
            variant="flat"
          >
            <ListboxItem
              key="products"
              onClick={() => setContent(<Pdoducts />)}
            >
              商品管理
            </ListboxItem>
          </Listbox>
        </ListBoxWrapper>
      </div>
      <div className="col-span-4 col-start-2">
        <>{content}</>
      </div>
    </div>
  )
}

const ListBoxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100">
    {children}
  </div>
)

const Pdoducts: FC = () => {
  const { data: data } = trpc.products.list.useQuery()
  const products = data ? data : []
  const [product, setProduct] = useState<products>()

  return (
    <div className="ml-5">
      <Tabs>
        <Tab key="add" title="添加">
          <Product />
        </Tab>
        <Tab key="search" title="查询">
          <div className="grid grid-cols-3 gap-2">
            <Select
              key="products-select"
              className="mb-5 max-w-xs"
              items={products}
              label="选择修改商品"
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Avatar
                      alt={item.data?.title}
                      className="flex-shrink-0"
                      size="sm"
                      src={item.data?.image}
                    />
                    <div className="flex flex-col">
                      <span>{item.data?.title}</span>
                      <span className="text-tiny text-default-500">
                        ￥{item.data?.price}
                      </span>
                    </div>
                  </div>
                ))
              }}
              onChange={(e) => {
                for (let i = 0; i < products.length; i++) {
                  if (products[i]?.id.toString() === e.target.value) {
                    setProduct(products[i])
                    return
                  }
                }
              }}
            >
              {(product: products) => (
                <SelectItem key={product.id} textValue={product.title}>
                  <div className="flex items-center gap-2">
                    <Avatar
                      alt={product.title}
                      className="flex-shrink-0"
                      size="sm"
                      src={product.image}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{product.title}</span>
                      <span className="text-tiny text-default-400">
                        ￥{product.price}
                      </span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          </div>

          <Product product={product} />
        </Tab>
      </Tabs>
    </div>
  )
}

interface productsProps {
  product?: products
}

const Product: FC<productsProps> = (props: productsProps) => {
  const [id, setId] = React.useState(props.product?.id ? props.product?.id : 0)
  const [title, setTitle] = React.useState(
    props.product?.title ? props.product?.title : ''
  )
  const [price, setPrice] = React.useState(
    props.product?.price ? props.product?.price.toString() : '0.00'
  )
  const [originPrice, setOriginPrice] = React.useState(
    props.product?.origin_price
      ? props.product?.origin_price.toString()
      : '0.00'
  )
  const [imageUrl, setImageUrl] = React.useState(
    props.product?.image ? props.product?.image : ''
  )
  const [payType, setPayType] = React.useState(
    props.product?.pay_type ? props.product?.pay_type : '自动发货'
  )
  const payTypes = new Array(['自动发货'])

  const [content, setContent] = React.useState(
    props.product?.content ? props.product?.content : ''
  )

  const [kami, setKami] = React.useState<TextContent>({
    text: props.product?.kami ? props.product?.kami : '[]'
  })
  const kamiHandler = useCallback(
    (content: Content, _previousContent: Content, _status: OnChangeStatus) => {
      setKami(content as TextContent)
    },
    [kami]
  )

  const [keywords, setKeywords] = React.useState<TextContent>({
    text: props.product?.keywords ? props.product?.keywords : '[]'
  })
  const keywordsHandler = useCallback(
    (content: Content, _previousContent: Content, _status: OnChangeStatus) => {
      setKeywords(content as TextContent)
    },
    [keywords]
  )

  useEffect(() => {
    setId(props.product?.id ? props.product?.id : 0)
    setTitle(props.product?.title ? props.product?.title : '')
    setPrice(props.product?.price ? props.product?.price.toString() : '0.00')
    setOriginPrice(
      props.product?.origin_price
        ? props.product?.origin_price.toString()
        : '0.00'
    )
    setImageUrl(props.product?.image ? props.product?.image : '')
    setPayType(props.product?.pay_type ? props.product?.pay_type : '自动发货')
    setContent(props.product?.content ? props.product?.content : '')
    setKami({ text: props.product?.kami ? props.product?.kami : '[]' })
    setKeywords({ text: props.product?.keywords ? props.product?.keywords : '[]' })
  }, [props.product])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [submit, setSubmit] = React.useState(false)
  const createProduct = trpc.products.create.useMutation()

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <Input
          className="mb-2 max-w-xs"
          label="标题"
          type="text"
          value={title}
          variant="bordered"
          onValueChange={setTitle}
        />
        <Input
          className="mb-2 max-w-xs"
          label="价格"
          placeholder="0.00"
          type="number"
          value={price}
          variant="bordered"
          onValueChange={setPrice}
        />
        <Input
          className="mb-2 max-w-xs"
          label="原始价格"
          placeholder="0.00"
          type="number"
          value={originPrice}
          variant="bordered"
          onValueChange={setOriginPrice}
        />
        <Select
          className="w-xs"
          defaultSelectedKeys={[payType]}
          items={payTypes}
          label="发货类型"
          variant="bordered"
          onSelectionChange={(e) => {
            //@ts-ignore
            if (e.values().next().value === undefined) {
              return
            }
            //@ts-ignore
            setPayType(e.values().next().value)
          }}
        >
          {(item) => (
            <SelectItem key={item.toString()} textValue={item.toString()}>
              {item}
            </SelectItem>
          )}
        </Select>

        <div className="flex">
          <Image src={imageUrl} width={100} />
          <Input
            isRequired
            accept="image/*"
            type="file"
            onChange={async (e) => {
              const file = e.target.files![0]

              if (!file) return

              const response = await fetch(
                `/api/images/upload?filename=${file.name}`,
                {
                  method: 'POST',
                  body: file
                }
              )
              const newBlob = (await response.json()) as PutBlobResult

              setImageUrl(newBlob.url)
            }}
          />
        </div>
      </div>

      <Button className="mb-2" color="primary" onClick={onOpen}>
        预览
      </Button>
      <Button
        className="mb-2 ml-5 mt-5"
        color="primary"
        isLoading={submit}
        onClick={async () => {
          if (title === '') {
            toast.error('标题不能为空')

            return
          }
          if (parseFloat(price) <= 0) {
            toast.error('价格必须大于零')

            return
          }
          if (parseFloat(originPrice) <= 0) {
            toast.error('原始价格必须大于零')

            return
          }
          if (imageUrl === '') {
            toast.error('图片不能为空')

            return
          }
          if (content === '') {
            toast.error('商品描述不能为空')

            return
          }

          const kamiJson = JSON.parse(kami.text)

          if (kamiJson.length <= 0) {
            toast.error('卡密不能为空')
            return
          }
          if (payType === '') {
            setPayType('自动发货')
          }

          setSubmit(true)
          try {
            await createProduct.mutateAsync({
              id: id,
              title: title,
              num: kamiJson.length,
              price: parseFloat(price),
              origin_price: parseFloat(originPrice),
              image: imageUrl,
              content: content,
              kami: kami.text,
              keywords: keywords.text,
              pay_type: payType
            })
          } catch (e: any) {
            toast.error(e.toString())
          } finally {
            setSubmit(false)
            toast.success('添加成功')
          }
        }}
      >
        提交
      </Button>

      <p className="mt-5">卡密：</p>
      <JSONEditorReact
        content={kami}
        mode={Mode.text}
        onChange={kamiHandler}
      />

      <p className="mt-5">关键词：</p>
      <JSONEditorReact
        content={keywords}
        mode={Mode.text}
        onChange={keywordsHandler}
      />

      <ScrollShadow className="mt-5">
        <Textarea
          disableAnimation
          disableAutosize
          classNames={{
            base: 'min-w-xs mb-2',
            input: 'resize-y min-h-[500px]'
          }}
          placeholder="商品描述"
          value={content}
          variant="bordered"
          onValueChange={setContent}
        />
      </ScrollShadow>

      <ScrollShadow>
        <Modal
          isOpen={isOpen}
          placement="center"
          scrollBehavior="inside"
          shouldBlockScroll={false}
          size="5xl"
          onClose={onClose}
        >
          <ModalContent>
            {(_onClose) => (
              <ModalBody>
                <div className="mx-auto flex flex-col">
                  <div
                    className={`prose-h1:text-green prose-strong:text-blue prose-ul:text-dark prose prose-h1:text-4xl prose-p:text-base prose-ul:list-decimal`}
                  >
                    <Markdown>{content}</Markdown>
                  </div>
                </div>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </ScrollShadow>
    </>
  )
}
