import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsCreateWithoutOrdersInputSchema } from './productsCreateWithoutOrdersInputSchema';
import { productsUncheckedCreateWithoutOrdersInputSchema } from './productsUncheckedCreateWithoutOrdersInputSchema';
import { productsCreateOrConnectWithoutOrdersInputSchema } from './productsCreateOrConnectWithoutOrdersInputSchema';
import { productsUpsertWithoutOrdersInputSchema } from './productsUpsertWithoutOrdersInputSchema';
import { productsWhereUniqueInputSchema } from './productsWhereUniqueInputSchema';
import { productsUpdateToOneWithWhereWithoutOrdersInputSchema } from './productsUpdateToOneWithWhereWithoutOrdersInputSchema';
import { productsUpdateWithoutOrdersInputSchema } from './productsUpdateWithoutOrdersInputSchema';
import { productsUncheckedUpdateWithoutOrdersInputSchema } from './productsUncheckedUpdateWithoutOrdersInputSchema';

export const productsUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.productsUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => productsCreateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => productsCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => productsUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => productsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => productsUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => productsUpdateWithoutOrdersInputSchema),z.lazy(() => productsUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default productsUpdateOneRequiredWithoutOrdersNestedInputSchema;
