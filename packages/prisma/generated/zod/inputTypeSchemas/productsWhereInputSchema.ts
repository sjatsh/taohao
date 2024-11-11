import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { OrdersListRelationFilterSchema } from './OrdersListRelationFilterSchema';

export const productsWhereInputSchema: z.ZodType<Prisma.productsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => productsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  num: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  origin_price: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pay_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kami: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  keywords: z.lazy(() => JsonNullableFilterSchema).optional(),
  orders: z.lazy(() => OrdersListRelationFilterSchema).optional()
}).strict();

export default productsWhereInputSchema;
