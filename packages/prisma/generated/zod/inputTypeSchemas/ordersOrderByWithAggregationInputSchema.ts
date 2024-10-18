import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ordersCountOrderByAggregateInputSchema } from './ordersCountOrderByAggregateInputSchema';
import { ordersAvgOrderByAggregateInputSchema } from './ordersAvgOrderByAggregateInputSchema';
import { ordersMaxOrderByAggregateInputSchema } from './ordersMaxOrderByAggregateInputSchema';
import { ordersMinOrderByAggregateInputSchema } from './ordersMinOrderByAggregateInputSchema';
import { ordersSumOrderByAggregateInputSchema } from './ordersSumOrderByAggregateInputSchema';

export const ordersOrderByWithAggregationInputSchema: z.ZodType<Prisma.ordersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  num: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  payment: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  kami: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ordersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ordersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ordersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ordersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ordersSumOrderByAggregateInputSchema).optional()
}).strict();

export default ordersOrderByWithAggregationInputSchema;
