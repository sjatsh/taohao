import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsUpdateManyMutationInputSchema } from '../inputTypeSchemas/productsUpdateManyMutationInputSchema'
import { productsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/productsUncheckedUpdateManyInputSchema'
import { productsWhereInputSchema } from '../inputTypeSchemas/productsWhereInputSchema'

export const productsUpdateManyArgsSchema: z.ZodType<Prisma.productsUpdateManyArgs> = z.object({
  data: z.union([ productsUpdateManyMutationInputSchema,productsUncheckedUpdateManyInputSchema ]),
  where: productsWhereInputSchema.optional(),
}).strict() ;

export default productsUpdateManyArgsSchema;
