import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersWhereUniqueInputSchema } from './ordersWhereUniqueInputSchema';
import { ordersUpdateWithoutProductInputSchema } from './ordersUpdateWithoutProductInputSchema';
import { ordersUncheckedUpdateWithoutProductInputSchema } from './ordersUncheckedUpdateWithoutProductInputSchema';
import { ordersCreateWithoutProductInputSchema } from './ordersCreateWithoutProductInputSchema';
import { ordersUncheckedCreateWithoutProductInputSchema } from './ordersUncheckedCreateWithoutProductInputSchema';

export const ordersUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ordersUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ordersUpdateWithoutProductInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ordersCreateWithoutProductInputSchema),z.lazy(() => ordersUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default ordersUpsertWithWhereUniqueWithoutProductInputSchema;
