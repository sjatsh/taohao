import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersUpdateManyMutationInputSchema } from '../inputTypeSchemas/ordersUpdateManyMutationInputSchema'
import { ordersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ordersUncheckedUpdateManyInputSchema'
import { ordersWhereInputSchema } from '../inputTypeSchemas/ordersWhereInputSchema'

export const ordersUpdateManyArgsSchema: z.ZodType<Prisma.ordersUpdateManyArgs> = z.object({
  data: z.union([ ordersUpdateManyMutationInputSchema,ordersUncheckedUpdateManyInputSchema ]),
  where: ordersWhereInputSchema.optional(),
}).strict() ;

export default ordersUpdateManyArgsSchema;
