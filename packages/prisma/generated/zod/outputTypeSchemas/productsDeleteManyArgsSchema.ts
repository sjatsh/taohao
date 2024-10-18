import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereInputSchema } from '../inputTypeSchemas/productsWhereInputSchema'

export const productsDeleteManyArgsSchema: z.ZodType<Prisma.productsDeleteManyArgs> = z.object({
  where: productsWhereInputSchema.optional(),
}).strict() ;

export default productsDeleteManyArgsSchema;
