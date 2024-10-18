import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsIncludeSchema } from '../inputTypeSchemas/productsIncludeSchema'
import { productsCreateInputSchema } from '../inputTypeSchemas/productsCreateInputSchema'
import { productsUncheckedCreateInputSchema } from '../inputTypeSchemas/productsUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { ordersFindManyArgsSchema } from "../outputTypeSchemas/ordersFindManyArgsSchema"
import { ProductsCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const productsSelectSchema: z.ZodType<Prisma.productsSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  num: z.boolean().optional(),
  price: z.boolean().optional(),
  origin_price: z.boolean().optional(),
  image: z.boolean().optional(),
  content: z.boolean().optional(),
  pay_type: z.boolean().optional(),
  kami: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const productsCreateArgsSchema: z.ZodType<Prisma.productsCreateArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  data: z.union([ productsCreateInputSchema,productsUncheckedCreateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default productsCreateArgsSchema;
