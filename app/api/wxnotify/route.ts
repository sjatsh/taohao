import {getHash} from "@/lib/xunhu_pay"
import {prisma} from "@/prisma"

export async function POST(request: Request) {
    const formData = await request.formData();
    let params: { [key: string]: string } = {}
    formData.forEach(function (value, key, parent) {
        if (typeof value !== 'string') {
            return
        }
        params[key] = value
    })
    if (formData.get("hash") !== getHash(params)) {
        return new Response('hash error', {
            status: 400,
        })
    }

    const orderId = formData.get("trade_order_id")
    if (!orderId) {
        return new Response('order_id error', {
            status: 400,
        })
    }

    const orders = await prisma.orders.updateMany({
        where: {
            order_id: orderId.toString(),
        },
        data: {
            status: 1,
        }
    })
    if (!orders) {
        return new Response('order not found', {
            status: 400,
        })
    }
    return new Response('success', {
        status: 200,
    })
}