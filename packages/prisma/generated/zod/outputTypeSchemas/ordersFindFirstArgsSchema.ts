import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersIncludeSchema } from '../inputTypeSchemas/ordersIncludeSchema'
import { ordersWhereInputSchema } from '../inputTypeSchemas/ordersWhereInputSchema'
import { ordersOrderByWithRelationInputSchema } from '../inputTypeSchemas/ordersOrderByWithRelationInputSchema'
import { ordersWhereUniqueInputSchema } from '../inputTypeSchemas/ordersWhereUniqueInputSchema'
import { OrdersScalarFieldEnumSchema } from '../inputTypeSchemas/OrdersScalarFieldEnumSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { productsArgsSchema } from "../outputTypeSchemas/productsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ordersSelectSchema: z.ZodType<Prisma.ordersSelect> = z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  num: z.boolean().optional(),
  price: z.boolean().optional(),
  email: z.boolean().optional(),
  payment: z.boolean().optional(),
  status: z.boolean().optional(),
  kami: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => productsArgsSchema)]).optional(),
}).strict()

export const ordersFindFirstArgsSchema: z.ZodType<Prisma.ordersFindFirstArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithRelationInputSchema.array(),ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrdersScalarFieldEnumSchema,OrdersScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default ordersFindFirstArgsSchema;
