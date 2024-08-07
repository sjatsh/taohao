'use client';

import React, {useMemo} from "react";
import {Tab, Tabs} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

export default function Page() {
    const [email, setEmail] = React.useState("");
    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const emailIsInvalid = useMemo(() => {
        if (email === "") return false;
        return !validateEmail(email);
    }, [email]);

    const [orderNum, setOrderNum] = React.useState("");

    const queryEmail = function () {
        // query email
    }

    const queryOrderNum = function () {
        // query order num
    }

    return (
        <>
            <p className="pb-8 pl-4 text-gray-500 text-lg font-bold">查询订单</p>
            <div className="rounded-md border shadow-xl px-6 py-6 mb-10">
                <p className="text-gray-500 text-small">
                    注意：最多只能查询近5笔订单。
                </p>
            </div>
            <div className="rounded-md border shadow-xl px-6 py-6">
                <Tabs aria-label="订单查询" color="primary" variant="underlined">
                    <Tab
                        key="email"
                        title="邮箱"
                    >
                        <div className="mb-3">
                            <p className="text-gray-500 text-small">
                                邮箱
                            </p>
                        </div>
                        <div className="mb-3">
                            <Input
                                type="email"
                                variant={"bordered"}
                                isInvalid={emailIsInvalid}
                                color={emailIsInvalid ? "danger" : "default"}
                                errorMessage="Please enter a valid email"
                                onValueChange={setEmail}
                                value={email}
                            />
                        </div>
                        <div>
                            <Button color="primary" size="sm" className="mr-2" onClick={queryEmail}>查询</Button>
                            <Button color="primary" size="sm" onClick={() => {
                                setEmail("")
                            }}>重置</Button>
                        </div>
                    </Tab>
                    <Tab
                        key="order_num"
                        title="订单"
                    >
                        <div className="mb-3">
                            <p className="text-gray-500 text-small">
                                订单号
                            </p>
                        </div>
                        <div className="mb-3">
                            <Input
                                type="text"
                                variant={"bordered"}
                                onValueChange={setOrderNum}
                                value={orderNum}
                            />
                        </div>
                        <div>
                            <Button color="primary" size="sm" className="mr-2" onClick={queryOrderNum}>查询</Button>
                            <Button color="primary" size="sm" onClick={() => {
                                setOrderNum("")
                            }}>重置</Button>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}