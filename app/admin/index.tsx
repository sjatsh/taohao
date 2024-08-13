'use client'

import React, {
  cache,
  Children,
  FC,
  FormEvent,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  Avatar,
  Code,
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
  useDisclosure,
} from '@nextui-org/react'
import Markdown from 'react-markdown'
import { Button } from '@nextui-org/button'
import type { PutBlobResult } from '@vercel/blob'
import { trpc } from '@/lib/trpc'
import JSONEditorReact from './jsoneditor'
import { Content, Mode, OnChangeStatus } from 'vanilla-jsoneditor'
import toast from 'react-hot-toast'
import { products } from '@prisma/client'

export default function IndexPage({ password }: { password: string }) {
  const [content, setContent] = React.useState(<div></div>)

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <ListboxWrapper>
          <Listbox
            selectionMode="single"
            variant="flat"
            aria-label="Admin Menu"
          >
            <ListboxItem
              key="products"
              onClick={() => setContent(<Pdoducts password={password} />)}
            >
              商品管理
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
      </div>
      <div className="col-span-4 col-start-2">
        <>{content}</>
      </div>
    </div>
  )
}

const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[260px] rounded-small border-small border-default-200 px-1 py-2 dark:border-default-100">
    {children}
  </div>
)

const Pdoducts: FC<{ password: string }> = (props: { password: string }) => {
  const [productsData, setProductsData] = useState<products[]>([])
  const [product, setProduct] = useState<products>()
  const productsMutaion = trpc.products.list.useMutation()

  return (
    <div className="ml-5">
      <Tabs
        size="lg"
        onSelectionChange={async (e) => {
          if (e === 'search') {
            const productsRes = await productsMutaion.mutateAsync({
              password: props.password,
            })
            //@ts-ignore
            setProductsData(productsRes)
          }
        }}
      >
        <Tab key="add" title="添加">
          <Product password={props.password} />
        </Tab>
        <Tab key="search" title="查询">
          <Select
            key={'products-select'}
            className="mb-5 max-w-xs"
            label="选择修改商品"
            items={productsData}
            onSelectionChange={(e) => {
              //@ts-ignore
              if (e.values().next().value === undefined) {
                //@ts-ignore
                setProduct({})
                return
              }
              //@ts-ignore
              const id = parseInt(e.values().next().value)
              //@ts-ignore
              productsData.map((item: products) => {
                if (item.id === id) {
                  setProduct(item)
                }
              })
            }}
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

          <Product password={props.password} product={product} />
        </Tab>
      </Tabs>
    </div>
  )
}

interface productsProps {
  password: string
  product?: products
}

const Product: FC<productsProps> = (props: productsProps) => {
  const [id, setId] = React.useState(props.product?.id ? props.product?.id : 0)
  const [title, setTitle] = React.useState(
    props.product?.title ? props.product?.title : '',
  )
  const [price, setPrice] = React.useState(
    props.product?.price ? props.product?.price.toString() : '0.00',
  )
  const [originPrice, setOriginPrice] = React.useState(
    props.product?.origin_price
      ? props.product?.origin_price.toString()
      : '0.00',
  )
  const [imageUrl, setImageUrl] = React.useState(
    props.product?.image ? props.product?.image : '',
  )
  const [payType, setPayType] = React.useState(
    props.product?.pay_type ? props.product?.pay_type : '',
  )
  const [content, setContent] = React.useState(
    props.product?.content ? props.product?.content : '',
  )
  const [jsonContent, setJsonContent] = useState<Content>({
    text: props.product?.kami ? props.product?.kami : '[]',
  })
  const handler = useCallback(
    (content: Content, previousContent: Content, status: OnChangeStatus) => {
      setJsonContent(content)
    },
    [jsonContent],
  )

  useEffect(() => {
    setId(props.product?.id ? props.product?.id : 0)
    setTitle(props.product?.title ? props.product?.title : '')
    setPrice(props.product?.price ? props.product?.price.toString() : '0.00')
    setOriginPrice(
      props.product?.origin_price
        ? props.product?.origin_price.toString()
        : '0.00',
    )
    setImageUrl(props.product?.image ? props.product?.image : '')
    setPayType(props.product?.pay_type ? props.product?.pay_type : '')
    setContent(props.product?.content ? props.product?.content : '')
    setJsonContent({ text: props.product?.kami ? props.product?.kami : '[]' })
  }, [props.product])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [submit, setSubmit] = React.useState(false)
  const createProduct = trpc.products.create.useMutation()

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <Input
          type="text"
          label="标题"
          variant="bordered"
          className="mb-2 max-w-xs"
          onValueChange={setTitle}
          value={title}
        />
        <Input
          type="number"
          label="价格"
          variant="bordered"
          placeholder="0.00"
          className="mb-2 max-w-xs"
          onValueChange={setPrice}
          value={price}
        />
        <Input
          type="number"
          label="原始价格"
          variant="bordered"
          placeholder="0.00"
          className="mb-2 max-w-xs"
          onValueChange={setOriginPrice}
          value={originPrice}
        />
        <Input
          type="text"
          label="支付类型"
          variant="bordered"
          className="mb-2 max-w-xs"
          onValueChange={setPayType}
          value={payType}
        />

        <div className="flex">
          <Image width={100} src={imageUrl} />
          <Input
            isRequired
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files![0]
              if (!file) return

              const response = await fetch(
                `/api/images/upload?filename=${file.name}`,
                {
                  method: 'POST',
                  body: file,
                },
              )
              const newBlob = (await response.json()) as PutBlobResult
              setImageUrl(newBlob.url)
            }}
          />
        </div>
      </div>

      <p>卡密：</p>

      <JSONEditorReact
        content={jsonContent}
        onChange={handler}
        mode={Mode.text}
      />

      <Button color="primary" className="mb-2 mt-5" onClick={onOpen}>
        预览
      </Button>
      <Button
        color="primary"
        className="mb-2 ml-5 mt-5"
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

          // @ts-ignore
          const jsonText = jsonContent.text
          const jsonObj = JSON.parse(jsonText)
          if (jsonObj.length <= 0) {
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
              password: props.password,
              title: title,
              num: jsonObj.length,
              price: parseFloat(price),
              origin_price: parseFloat(originPrice),
              image: imageUrl,
              content: content,
              kami: jsonText,
              pay_type: payType,
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

      <ScrollShadow>
        <Textarea
          variant="bordered"
          placeholder="商品描述"
          disableAnimation
          disableAutosize
          classNames={{
            base: 'min-w-xs mb-2',
            input: 'resize-y min-h-[500px]',
          }}
          onValueChange={setContent}
          value={content}
        />
      </ScrollShadow>

      <ScrollShadow>
        <Modal
          size="5xl"
          isOpen={isOpen}
          onClose={onClose}
          shouldBlockScroll={false}
          placement="center"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <ModalBody>
                <div
                  className={`prose-h1:text-green prose-strong:text-blue prose-ul:text-dark prose prose-h1:text-4xl prose-p:text-base prose-ul:list-decimal`}
                >
                  <Markdown>{content}</Markdown>
                </div>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </ScrollShadow>
    </>
  )
}
