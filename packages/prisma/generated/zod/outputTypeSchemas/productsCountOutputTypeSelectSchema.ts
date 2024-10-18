import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const productsCountOutputTypeSelectSchema: z.ZodType<Prisma.productsCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export default productsCountOutputTypeSelectSchema;
