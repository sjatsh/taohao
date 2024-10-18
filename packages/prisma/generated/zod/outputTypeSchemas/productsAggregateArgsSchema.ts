import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereInputSchema } from '../inputTypeSchemas/productsWhereInputSchema'
import { productsOrderByWithRelationInputSchema } from '../inputTypeSchemas/productsOrderByWithRelationInputSchema'
import { productsWhereUniqueInputSchema } from '../inputTypeSchemas/productsWhereUniqueInputSchema'

export const productsAggregateArgsSchema: z.ZodType<Prisma.productsAggregateArgs> = z.object({
  where: productsWhereInputSchema.optional(),
  orderBy: z.union([ productsOrderByWithRelationInputSchema.array(),productsOrderByWithRelationInputSchema ]).optional(),
  cursor: productsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default productsAggregateArgsSchema;
