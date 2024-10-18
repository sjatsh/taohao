import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersWhereUniqueInputSchema } from './ordersWhereUniqueInputSchema';
import { ordersUpdateWithoutProductInputSchema } from './ordersUpdateWithoutProductInputSchema';
import { ordersUncheckedUpdateWithoutProductInputSchema } from './ordersUncheckedUpdateWithoutProductInputSchema';

export const ordersUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ordersUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ordersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ordersUpdateWithoutProductInputSchema),z.lazy(() => ordersUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export default ordersUpdateWithWhereUniqueWithoutProductInputSchema;
