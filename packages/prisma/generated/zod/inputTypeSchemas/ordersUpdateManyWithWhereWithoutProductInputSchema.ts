import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersScalarWhereInputSchema } from './ordersScalarWhereInputSchema';
import { ordersUpdateManyMutationInputSchema } from './ordersUpdateManyMutationInputSchema';
import { ordersUncheckedUpdateManyWithoutProductInputSchema } from './ordersUncheckedUpdateManyWithoutProductInputSchema';

export const ordersUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ordersUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ordersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ordersUpdateManyMutationInputSchema),z.lazy(() => ordersUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export default ordersUpdateManyWithWhereWithoutProductInputSchema;
