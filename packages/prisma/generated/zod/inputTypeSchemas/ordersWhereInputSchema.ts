import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProductsRelationFilterSchema } from './ProductsRelationFilterSchema';
import { productsWhereInputSchema } from './productsWhereInputSchema';

export const ordersWhereInputSchema: z.ZodType<Prisma.ordersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersWhereInputSchema),z.lazy(() => ordersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  num: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  payment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  kami: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  product: z.union([ z.lazy(() => ProductsRelationFilterSchema),z.lazy(() => productsWhereInputSchema) ]).optional(),
}).strict();

export default ordersWhereInputSchema;
