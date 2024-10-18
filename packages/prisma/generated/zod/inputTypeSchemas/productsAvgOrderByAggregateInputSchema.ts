import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const productsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.productsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  num: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  origin_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default productsAvgOrderByAggregateInputSchema;
