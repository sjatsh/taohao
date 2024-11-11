import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { productsCreateNestedOneWithoutOrdersInputSchema } from './productsCreateNestedOneWithoutOrdersInputSchema';

export const ordersCreateInputSchema: z.ZodType<Prisma.ordersCreateInput> = z.object({
  order_id: z.string(),
  num: z.number().int().optional(),
  price: z.number().optional(),
  email: z.string(),
  payment: z.string().optional(),
  status: z.number().int().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  product: z.lazy(() => productsCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export default ordersCreateInputSchema;
