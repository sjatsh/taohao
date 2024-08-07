'use client';

import React, {Suspense, useMemo} from "react";
import {Button} from "@nextui-org/button";
import toast from "react-hot-toast";
import {Input} from "@nextui-org/input";
import {WeiXin} from "@/app/components/icons";
import {trpc} from "@/lib/trpc";
import {Image, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";

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

    const {isOpen, onOpen, onClose} = useDisclosure();

    const orderMutation = trpc.orders.create.useMutation();

    const submitOnClick = () => {
        if (email === "" || emailIsInvalid) {
            toast.error('请输入有效的邮箱');
            return;
        }
        if (num === "" || numIsInvalid || (parseInt(num) < 1 || parseInt(num) > 20)) {
            toast.error('请输入有效的数量');
            return;
        }
        onOpen();

        orderMutation.mutate({
            product_id: parseInt(params.id),
            num: parseInt(num),
            email: email
        })
    }

    const product = trpc.products.byId.useQuery({id: parseInt(params.id)}).data;

    return (
        <>
            <PaymentDialog isOpen={isOpen} onClose={onClose} price={product?.price}/>
            <Suspense>
                <div>
                    <p className="font-medium text-gray-900 text-2xl">购买{product?.title}</p>
                </div>
                <div className="my-1">
                    <Button color="primary" variant="bordered"
                            className="p-2 m-0.5 min-w-5 h-5 text-tiny gap-2 rounded-small">
                        自动发货
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
                    color="primary"
                    variant="bordered"
                    startContent={<WeiXin/>}
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
    }:
        {
            isOpen: boolean;
            onClose: () => void;
            price?: number
        }
) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <ModalHeader>
                    <div className="grid auto-rows-auto">
                        <div className="grid grid-cols-5">
                            <p className="col-span-1">付款金额: </p>
                            <p className="col-span-1 font-medium text-xl text-red-600">￥ {price}</p>
                        </div>
                        <p className="font-light text-small text-red-600">
                            注意：转账备注请填写订单邮箱地址，否则会导致无法自动发货
                        </p>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Image src="/wechat_pay.png"/>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
