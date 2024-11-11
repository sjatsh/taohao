import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { productsCountOrderByAggregateInputSchema } from './productsCountOrderByAggregateInputSchema';
import { productsAvgOrderByAggregateInputSchema } from './productsAvgOrderByAggregateInputSchema';
import { productsMaxOrderByAggregateInputSchema } from './productsMaxOrderByAggregateInputSchema';
import { productsMinOrderByAggregateInputSchema } from './productsMinOrderByAggregateInputSchema';
import { productsSumOrderByAggregateInputSchema } from './productsSumOrderByAggregateInputSchema';

export const productsOrderByWithAggregationInputSchema: z.ZodType<Prisma.productsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  num: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  origin_price: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  pay_type: z.lazy(() => SortOrderSchema).optional(),
  kami: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => productsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => productsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => productsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => productsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => productsSumOrderByAggregateInputSchema).optional()
}).strict();

export default productsOrderByWithAggregationInputSchema;
