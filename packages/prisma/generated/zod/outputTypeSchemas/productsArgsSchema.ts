import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsSelectSchema } from '../inputTypeSchemas/productsSelectSchema';
import { productsIncludeSchema } from '../inputTypeSchemas/productsIncludeSchema';

export const productsArgsSchema: z.ZodType<Prisma.productsDefaultArgs> = z.object({
  select: z.lazy(() => productsSelectSchema).optional(),
  include: z.lazy(() => productsIncludeSchema).optional(),
}).strict();

export default productsArgsSchema;
