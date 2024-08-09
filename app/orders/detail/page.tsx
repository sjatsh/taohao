import React from "react";
import {DetailPage} from "@/module/orders/detail";
import {prisma} from "@/prisma";

export default async function Page(
    {
        searchParams,
    }: {
        searchParams: {
            order_id: string
            email: string
        }
    }
) {
    let orders: any[] = [];
    if (searchParams.order_id) {
        orders = await prisma.orders.findMany({
            where: {
                order_id: searchParams.order_id
            },
            include: {
                product: true
            },
            orderBy: {
                created_at: 'desc'
            },
            take: 5,
        })
    } else if (searchParams.email) {
        orders = await prisma.orders.findMany({
            where: {
                email: searchParams.email
            },
            include: {
                product: true
            },
            orderBy: {
                created_at: 'desc'
            },
            take: 5,
        });
    }

    if (orders.length === 0) {
        return <p className="text-red-500 ml-3">订单不存在</p>
    }

    return (
        <>
            {
                orders.map((order, index) => (
                    <div
                        key={index}
                        className="my-5">
                        <DetailPage
                            props={{
                                ...order,
                            }}
                        />
                    </div>
                ))
            }
        </>
    );
}
