import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ordersOrderByRelationAggregateInputSchema } from './ordersOrderByRelationAggregateInputSchema';

export const productsOrderByWithRelationInputSchema: z.ZodType<Prisma.productsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  num: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  origin_price: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  pay_type: z.lazy(() => SortOrderSchema).optional(),
  kami: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => ordersOrderByRelationAggregateInputSchema).optional()
}).strict();

export default productsOrderByWithRelationInputSchema;
