import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereInputSchema } from '../inputTypeSchemas/productsWhereInputSchema'
import { productsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/productsOrderByWithAggregationInputSchema'
import { ProductsScalarFieldEnumSchema } from '../inputTypeSchemas/ProductsScalarFieldEnumSchema'
import { productsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/productsScalarWhereWithAggregatesInputSchema'

export const productsGroupByArgsSchema: z.ZodType<Prisma.productsGroupByArgs> = z.object({
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithAggregationInputSchema.array(),productsOrderByWithAggregationInputSchema ]).optional(),
  by: ProductsScalarFieldEnumSchema.array(),
  having: productsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default productsGroupByArgsSchema;
