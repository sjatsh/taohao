import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereInputSchema } from '../inputTypeSchemas/ordersWhereInputSchema'

export const ordersDeleteManyArgsSchema: z.ZodType<Prisma.ordersDeleteManyArgs> = z.object({
  where: ordersWhereInputSchema.optional(),
}).strict() ;

export default ordersDeleteManyArgsSchema;
