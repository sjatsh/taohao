import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersWhereUniqueInputSchema } from './ordersWhereUniqueInputSchema';
import { ordersCreateWithoutProductInputSchema } from './ordersCreateWithoutProductInputSchema';
import { ordersUncheckedCreateWithoutProductInputSchema } from './ordersUncheckedCreateWithoutProductInputSchema';

export const ordersCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ordersCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ordersCreateWithoutProductInputSchema),z.lazy(() => ordersUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default ordersCreateOrConnectWithoutProductInputSchema;
