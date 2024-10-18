import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereInputSchema } from '../inputTypeSchemas/ordersWhereInputSchema'
import { ordersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ordersOrderByWithAggregationInputSchema'
import { OrdersScalarFieldEnumSchema } from '../inputTypeSchemas/OrdersScalarFieldEnumSchema'
import { ordersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ordersScalarWhereWithAggregatesInputSchema'

export const ordersGroupByArgsSchema: z.ZodType<Prisma.ordersGroupByArgs> = z.object({
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithAggregationInputSchema.array(),ordersOrderByWithAggregationInputSchema ]).optional(),
  by: OrdersScalarFieldEnumSchema.array(),
  having: ordersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ordersGroupByArgsSchema;
