import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsWhereInputSchema } from './productsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrdersListRelationFilterSchema } from './OrdersListRelationFilterSchema';

export const productsWhereUniqueInputSchema: z.ZodType<Prisma.productsWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    title: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    title: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  title: z.string().optional(),
  AND: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => productsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => productsWhereInputSchema),z.lazy(() => productsWhereInputSchema).array() ]).optional(),
  num: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  origin_price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pay_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kami: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  keywords: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  orders: z.lazy(() => OrdersListRelationFilterSchema).optional()
}).strict());

export default productsWhereUniqueInputSchema;
