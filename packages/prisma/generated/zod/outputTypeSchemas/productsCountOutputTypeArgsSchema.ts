import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCountOutputTypeSelectSchema } from './productsCountOutputTypeSelectSchema';

export const productsCountOutputTypeArgsSchema: z.ZodType<Prisma.productsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => productsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default productsCountOutputTypeSelectSchema;
