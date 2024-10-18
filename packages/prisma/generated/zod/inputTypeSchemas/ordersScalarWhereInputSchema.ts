import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ordersScalarWhereInputSchema: z.ZodType<Prisma.ordersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ordersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ordersScalarWhereInputSchema),z.lazy(() => ordersScalarWhereInputSchema).array() ]).optional(),
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
}).strict();

export default ordersScalarWhereInputSchema;
