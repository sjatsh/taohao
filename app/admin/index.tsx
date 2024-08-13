'use client'

import React, {
  cache,
  Children,
  FC,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from 'react'
import {
  Code,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  Tab,
  Tabs,
  Textarea,
  useDisclosure,
} from '@nextui-org/react'
import Markdown from 'react-markdown'
import { Button } from '@nextui-org/button'
import type { PutBlobResult } from '@vercel/blob'
import { trpc } from '@/lib/trpc'
import dynamic from 'next/dynamic'
import JSONEditorReact from './jsoneditor'
import { Content, JSONContent, Mode, OnChangeStatus } from 'vanilla-jsoneditor'
import toast from 'react-hot-toast'

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

const Pdoducts: FC<{ password: string }> = ({
  password,
}: {
  password: string
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageUrl, setImageUrl] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [price, setPrice] = React.useState('0')
  const [originPrice, setOriginPrice] = React.useState('0')
  const [paymentType, setPaymentType] = React.useState('自动发货')
  const [content, setContent] = React.useState('')
  const [submit, setSubmit] = React.useState(false)
  const createProduct = trpc.products.create.useMutation()

  const [jsonContent, setJsonContent] = useState<Content>({ json: [] })
  const handler = useCallback(
    (content: Content, previousContent: Content, status: OnChangeStatus) => {
      setJsonContent(content)
    },
    [jsonContent],
  )

  return (
    <div className="ml-5">
      <Tabs key="lg" size="lg">
        <Tab key="add" title="添加">
          <div className="grid grid-cols-3 gap-2">
            <Input
              type="text"
              label="标题"
              variant="bordered"
              className="mb-2 max-w-xs"
              onValueChange={setTitle}
              defaultValue={title}
            />
            <Input
              type="number"
              label="价格"
              variant="bordered"
              placeholder="0.00"
              className="mb-2 max-w-xs"
              defaultValue={price}
              onValueChange={setPrice}
            />
            <Input
              type="number"
              label="原始价格"
              variant="bordered"
              placeholder="0.00"
              className="mb-2 max-w-xs"
              defaultValue={originPrice}
              onValueChange={setOriginPrice}
            />
            <Input
              type="text"
              variant="bordered"
              className="mb-2 max-w-xs"
              defaultValue={paymentType}
              onValueChange={setPaymentType}
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
            onClick={() => {
              if (title === '') {
                toast.error('标题不能为空')
                return
              }
              if (parseInt(price) <= 0) {
                toast.error('价格必须大于零')
                return
              }
              if (parseInt(originPrice) <= 0) {
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

              const jsonObj = JSON.parse(jsonContent.text)
              if (jsonObj.length <= 0) {
                toast.error('卡密不能为空')
                return
              }
              if (paymentType === '') {
                setPaymentType('自动发货')
              }

              setSubmit(true)
              createProduct.mutate({
                password: password,
                title: title,
                num: jsonObj.length,
                price: parseInt(price),
                origin_price: parseInt(originPrice),
                image: imageUrl,
                content: content,
                kami: jsonContent.text,
                pay_type: paymentType,
              })
              setSubmit(false)
              toast.success('添加成功')
            }}
          >
            提交
          </Button>
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
          />

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
        </Tab>
        <Tab key="search" title="查询" />
      </Tabs>
    </div>
  )
}
