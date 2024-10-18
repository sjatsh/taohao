import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateManyInputSchema } from '../inputTypeSchemas/productsCreateManyInputSchema'

export const productsCreateManyArgsSchema: z.ZodType<Prisma.productsCreateManyArgs> = z.object({
  data: z.union([ productsCreateManyInputSchema,productsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default productsCreateManyArgsSchema;
