import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsWhereInputSchema } from './productsWhereInputSchema';
import { productsUpdateWithoutOrdersInputSchema } from './productsUpdateWithoutOrdersInputSchema';
import { productsUncheckedUpdateWithoutOrdersInputSchema } from './productsUncheckedUpdateWithoutOrdersInputSchema';

export const productsUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.productsUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => productsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => productsUpdateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default productsUpdateToOneWithWhereWithoutOrdersInputSchema;
