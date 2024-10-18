import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersWhereInputSchema } from './ordersWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProductsRelationFilterSchema } from './ProductsRelationFilterSchema';
import { productsWhereInputSchema } from './productsWhereInputSchema';

export const ordersWhereUniqueInputSchema: z.ZodType<Prisma.ordersWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    order_id: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    order_id: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  order_id: z.string().optional(),
  AND: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  product_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  num: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  payment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  kami: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductsRelationFilterSchema),z.lazy(() => productsWhereInputSchema) ]).optional(),
}).strict());

export default ordersWhereUniqueInputSchema;
