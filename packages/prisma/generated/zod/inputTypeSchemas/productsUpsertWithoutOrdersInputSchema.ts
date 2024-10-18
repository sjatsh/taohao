import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsUpdateWithoutOrdersInputSchema } from './productsUpdateWithoutOrdersInputSchema';
import { productsUncheckedUpdateWithoutOrdersInputSchema } from './productsUncheckedUpdateWithoutOrdersInputSchema';
import { productsCreateWithoutOrdersInputSchema } from './productsCreateWithoutOrdersInputSchema';
import { productsUncheckedCreateWithoutOrdersInputSchema } from './productsUncheckedCreateWithoutOrdersInputSchema';
import { productsWhereInputSchema } from './productsWhereInputSchema';

export const productsUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.productsUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => productsUpdateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => productsCreateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => productsWhereInputSchema).optional()
}).strict();

export default productsUpsertWithoutOrdersInputSchema;
