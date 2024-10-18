import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateManyInputSchema } from '../inputTypeSchemas/productsCreateManyInputSchema'

export const productsAndReturnCreateManyArgsSchema: z.ZodType<Prisma.productsAndReturnCreateManyArgs> = z.object({
  data: z.union([ productsCreateManyInputSchema,productsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default productsAndReturnCreateManyArgsSchema;
