import {router, trpc} from '../trpc';
import {z} from 'zod';
import {prisma} from "@/prisma";
import cuid from 'cuid';

export const orders = router({
    create: trpc.procedure.input(
        z.object({
            product_id: z.number(),
            num: z.number(),
            email: z.string()
        }),
    ).output(
        z.object({
            order_id: z.string(),
        }),
    ).mutation(async ({input}) => {
        const order_id = cuid();
        const res = await prisma.orders.create({
            data: {
                order_id: order_id,
                product_id: input.product_id,
                num: input.num,
                email: input.email
            }
        });
        return {order_id: res.order_id};
    }),
    find: trpc.procedure.input(
        z.object({
            email: z.string(),
            order_id: z.string()
        })
    ).output(
        z.array(
            z.object({
                order_id: z.string(),
                product_id: z.number(),
                num: z.number(),
                email: z.string(),
            })
        )
    ).query(async ({input}) => {
        let where = {};
        if (input.email) {
            where = {
                email: input.email
            }
        }
        if (input.order_id) {
            where = {
                order_id: input.order_id
            }
        }
        return prisma.orders.findMany({
            where: where,
            orderBy: {
                created_at: 'desc'
            }
        });
    }),
});
