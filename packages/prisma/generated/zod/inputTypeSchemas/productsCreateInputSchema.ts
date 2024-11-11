import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersCreateNestedManyWithoutProductInputSchema } from './ordersCreateNestedManyWithoutProductInputSchema';

export const productsCreateInputSchema: z.ZodType<Prisma.productsCreateInput> = z.object({
  title: z.string(),
  num: z.number().int().optional(),
  price: z.number().optional(),
  origin_price: z.number().optional(),
  image: z.string().optional(),
  content: z.string(),
  pay_type: z.string().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  keywords: z.string().optional(),
  orders: z.lazy(() => ordersCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default productsCreateInputSchema;
