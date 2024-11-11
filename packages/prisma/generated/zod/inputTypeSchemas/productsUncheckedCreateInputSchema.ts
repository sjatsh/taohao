import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ordersUncheckedCreateNestedManyWithoutProductInputSchema } from './ordersUncheckedCreateNestedManyWithoutProductInputSchema';

export const productsUncheckedCreateInputSchema: z.ZodType<Prisma.productsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  num: z.number().int(),
  price: z.number(),
  origin_price: z.number().optional().nullable(),
  image: z.string().optional(),
  content: z.string(),
  pay_type: z.string().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  keywords: z.string().optional(),
  orders: z.lazy(() => ordersUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default productsUncheckedCreateInputSchema;
