import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsIncludeSchema } from '../inputTypeSchemas/productsIncludeSchema'
import { productsWhereInputSchema } from '../inputTypeSchemas/productsWhereInputSchema'
import { productsOrderByWithRelationInputSchema } from '../inputTypeSchemas/productsOrderByWithRelationInputSchema'
import { productsWhereUniqueInputSchema } from '../inputTypeSchemas/productsWhereUniqueInputSchema'
import { ProductsScalarFieldEnumSchema } from '../inputTypeSchemas/ProductsScalarFieldEnumSchema'
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

export const productsFindFirstArgsSchema: z.ZodType<Prisma.productsFindFirstArgs> = z.object({
  select: productsSelectSchema.optional(),
  include: productsIncludeSchema.optional(),
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithRelationInputSchema.array(),productsOrderByWithRelationInputSchema ]).optional(),
  cursor: productsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductsScalarFieldEnumSchema,ProductsScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export default productsFindFirstArgsSchema;
