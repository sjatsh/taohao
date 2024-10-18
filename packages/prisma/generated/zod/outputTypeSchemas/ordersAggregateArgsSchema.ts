import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereInputSchema } from '../inputTypeSchemas/ordersWhereInputSchema'
import { ordersOrderByWithRelationInputSchema } from '../inputTypeSchemas/ordersOrderByWithRelationInputSchema'
import { ordersWhereUniqueInputSchema } from '../inputTypeSchemas/ordersWhereUniqueInputSchema'

export const ordersAggregateArgsSchema: z.ZodType<Prisma.ordersAggregateArgs> = z.object({
  where: ordersWhereInputSchema.optional(),
  orderBy: z.union([ ordersOrderByWithRelationInputSchema.array(),ordersOrderByWithRelationInputSchema ]).optional(),
  cursor: ordersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ordersAggregateArgsSchema;
