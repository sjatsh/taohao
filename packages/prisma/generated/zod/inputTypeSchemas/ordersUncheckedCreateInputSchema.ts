import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ordersUncheckedCreateInputSchema: z.ZodType<Prisma.ordersUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  order_id: z.string(),
  product_id: z.number().int().optional(),
  num: z.number().int().optional(),
  price: z.number().optional(),
  email: z.string(),
  payment: z.string().optional(),
  status: z.number().int().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default ordersUncheckedCreateInputSchema;
