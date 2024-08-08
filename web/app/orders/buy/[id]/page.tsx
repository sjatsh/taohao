'use client';

import React, {Suspense, useEffect, useMemo, useState} from "react";
import {Button} from "@nextui-org/button";
import toast from "react-hot-toast";
import {Input} from "@nextui-org/input";
import {WeiXin} from "@/app/components/icons";
import {trpc} from "@/lib/trpc";
import {Image, Modal, ModalBody, ModalContent, ModalHeader, Skeleton, useDisclosure} from "@nextui-org/react";
import {redirect} from "next/navigation";

export default function Page(
    {
        params,
    }: {
        params: { id: string };
    }
) {

    const [email, setEmail] = React.useState("");
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const emailIsInvalid = useMemo(() => {
        if (email === "") return false;
        return !validateEmail(email);
    }, [email]);

    const [num, setNum] = React.useState("1");
    const validateNum = (value: string) => value.match(/^[1-9]\d*$/i);
    const numIsInvalid = useMemo(() => {
        if (num === "") return false;
        return !validateNum(num);
    }, [num]);

    const [payment, setPayment] = React.useState("微信");
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [qrCodeUrl, setQrcodeUrl] = React.useState("");
    const orderCreate = trpc.orders.create.useMutation();
    const orderFind = trpc.orders.find.useMutation();
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {
        orderCreate.error && toast.error(orderCreate.error.message);
        if (orderCreate.data) {
            setQrcodeUrl(orderCreate.data.qrcode_url);
            orderFind.mutate(orderCreate.data.order_id)
        }
    }, [orderCreate.data, orderCreate.error]);

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
                break;
        }
    }, [orderFind.data]);

    const submitOnClick = async () => {
        if (email === "" || emailIsInvalid) {
            toast.error('请输入有效的邮箱');
            return;
        }
        if (num === "" || numIsInvalid || (parseInt(num) < 1 || parseInt(num) > 20)) {
            toast.error('请输入有效的数量');
            return;
        }
        onOpen();

        orderCreate.mutate({
            product_id: parseInt(params.id),
            num: parseInt(num),
            email: email,
            payment: payment,
        })
    }

    const product = trpc.products.byId.useQuery(parseInt(params.id)).data;

    return (
        <>
            <PaymentDialog isOpen={isOpen} onClose={onClose} price={product?.price} qrCodeUrl={qrCodeUrl}/>
            <Suspense>
                <div>
                    <p className="font-medium text-gray-900 text-2xl">购买{product?.title}</p>
                </div>
                <div className="my-1">
                    <Button color="primary" variant="bordered"
                            className="p-2 m-0.5 min-w-5 h-5 text-tiny gap-2 rounded-small">
                        {product?.pay_type}
                    </Button>
                    <Button color="primary" variant="bordered"
                            className="p-2 m-0.5 min-w-5 h-5 text-tiny gap-2 rounded-small">
                        库存({product?.num})
                    </Button>
                    <Button color="default" variant="bordered"
                            className="p-2 m-0.5 min-w-5 h-5 text-tiny gap-2 rounded-small">
                        限购(20)
                    </Button>
                </div>
                <div className="my-2 flex items-end">
                    <p className="font-medium text-xl text-red-600">
                        ￥ {product?.price}
                    </p>
                    <p className={`text-tiny ml-1 line-through ${!product?.origin_price ? 'disabled' : ''}`}>￥ {product?.origin_price}</p>
                </div>
            </Suspense>

            <div className="my-1">
                <Input
                    type="email"
                    variant={"bordered"}
                    label="邮箱"
                    placeholder="接收卡密或通知"
                    isInvalid={emailIsInvalid}
                    color={emailIsInvalid ? "danger" : "default"}
                    errorMessage="Please enter a valid email"
                    onValueChange={setEmail}
                />
            </div>
            <div className="my-1">
                <Input
                    type="number"
                    variant={"bordered"}
                    label="数量"
                    min="1"
                    max={product?.num}
                    defaultValue="1"
                    isInvalid={numIsInvalid}
                    color={numIsInvalid ? "danger" : "default"}
                    errorMessage="Please enter a valid number"
                    onValueChange={setNum}
                />
            </div>
            <div className="my-0.5">
                <p className="text-tiny ml-1 text-gray-600">支付方式</p>
            </div>
            <div className="my-0.5">
                <Button
                    color={payment === "微信" ? "primary" : "default"}
                    variant="bordered"
                    startContent={<WeiXin/>}
                    onSelect={() => {
                        setPayment("微信")
                    }}
                >
                    微信
                </Button>
            </div>
            <div className="grid grid-rows-subgrid">
                <div className="grid grid-cols-3 ">
                    <div className="col-start-2 grid place-items-center">
                        <Button color="danger" onClick={submitOnClick} isLoading={isOpen}>
                            提交订单
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}


function PaymentDialog(
    {
        isOpen,
        onClose,
        price,
        qrCodeUrl
    }:
        {
            isOpen: boolean;
            onClose: () => void;
            price?: number
            qrCodeUrl: string
        }
) {
    const [loaded, setLoaded] = useState(false)
    return (
        <Modal size="xs" isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <ModalHeader>
                    付款金额:
                    <p className="font-medium text-xl text-red-600"> ￥{price}</p>
                </ModalHeader>
                <Skeleton isLoaded={loaded}>
                    <ModalBody className="items-center min-w-[320px] min-h-[288px]">
                        <Image src={qrCodeUrl} onLoad={() => {
                            setLoaded(true)
                        }}/>
                    </ModalBody>
                </Skeleton>
            </ModalContent>
        </Modal>
    )
}
