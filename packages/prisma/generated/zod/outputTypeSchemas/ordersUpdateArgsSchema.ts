import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersIncludeSchema } from '../inputTypeSchemas/ordersIncludeSchema'
import { ordersUpdateInputSchema } from '../inputTypeSchemas/ordersUpdateInputSchema'
import { ordersUncheckedUpdateInputSchema } from '../inputTypeSchemas/ordersUncheckedUpdateInputSchema'
import { ordersWhereUniqueInputSchema } from '../inputTypeSchemas/ordersWhereUniqueInputSchema'
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

export const ordersUpdateArgsSchema: z.ZodType<Prisma.ordersUpdateArgs> = z.object({
  select: ordersSelectSchema.optional(),
  include: ordersIncludeSchema.optional(),
  data: z.union([ ordersUpdateInputSchema,ordersUncheckedUpdateInputSchema ]),
  where: ordersWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default ordersUpdateArgsSchema;
