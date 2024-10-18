import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsCreateWithoutOrdersInputSchema } from './productsCreateWithoutOrdersInputSchema';
import { productsUncheckedCreateWithoutOrdersInputSchema } from './productsUncheckedCreateWithoutOrdersInputSchema';
import { productsCreateOrConnectWithoutOrdersInputSchema } from './productsCreateOrConnectWithoutOrdersInputSchema';
import { productsWhereUniqueInputSchema } from './productsWhereUniqueInputSchema';

export const productsCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.productsCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => productsCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => productsWhereUniqueInputSchema).optional()
}).strict();

export default productsCreateNestedOneWithoutOrdersInputSchema;
