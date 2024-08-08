'use client';

import {Card, CardBody, CardFooter, Image, Skeleton} from "@nextui-org/react";
import React, {FC} from "react";
import {CardHeader} from "@nextui-org/card";

export interface OrderCardProps {
    id: number;
    title: string;
    img: string;
    price: number;
    num: number;
}

export const OrderCard: FC<OrderCardProps> = (props: OrderCardProps) => {
    const [loaded, setLoaded] = React.useState(false);
    return (
        <>
            <Card
                key={props.id}
                isPressable
                className="max-w-48"
                isDisabled={props.num === 0}
                isHoverable={true}
                shadow="sm"
            >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    {
                        props.num === 0 ?
                            <h4 className="font-bold  text-red-600">缺货</h4> :
                            <h4 className="font-bold text-green-600">库存: {props.num}</h4>
                    }
                </CardHeader>
                <Skeleton isLoaded={loaded}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            className="w-auto object-cover"
                            radius="lg"
                            shadow="sm"
                            src={props.img}
                            onLoad={() => {
                                setLoaded(true);
                            }}
                        />
                    </CardBody>
                </Skeleton>
                <CardFooter className="text-medium justify-between">
                    <b>{props.title}</b>
                    <p className="text-default-500">￥{props.price}</p>
                </CardFooter>
            </Card>
        </>
    );
};
