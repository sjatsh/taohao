import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateManyInputSchema } from '../inputTypeSchemas/ordersCreateManyInputSchema'

export const ordersAndReturnCreateManyArgsSchema: z.ZodType<Prisma.ordersAndReturnCreateManyArgs> = z.object({
  data: z.union([ ordersCreateManyInputSchema,ordersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ordersAndReturnCreateManyArgsSchema;
