import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ordersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ordersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ordersOrderByRelationAggregateInputSchema;
