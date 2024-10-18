import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsWhereUniqueInputSchema } from './productsWhereUniqueInputSchema';
import { productsCreateWithoutOrdersInputSchema } from './productsCreateWithoutOrdersInputSchema';
import { productsUncheckedCreateWithoutOrdersInputSchema } from './productsUncheckedCreateWithoutOrdersInputSchema';

export const productsCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.productsCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => productsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => productsCreateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export default productsCreateOrConnectWithoutOrdersInputSchema;
