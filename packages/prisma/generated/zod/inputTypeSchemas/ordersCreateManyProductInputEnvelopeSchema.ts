import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersCreateManyProductInputSchema } from './ordersCreateManyProductInputSchema';

export const ordersCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ordersCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ordersCreateManyProductInputSchema),z.lazy(() => ordersCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ordersCreateManyProductInputEnvelopeSchema;
