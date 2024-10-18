import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ordersCreateManyInputSchema: z.ZodType<Prisma.ordersCreateManyInput> = z.object({
  id: z.number().int().optional(),
  order_id: z.string(),
  product_id: z.number().int(),
  num: z.number().int(),
  price: z.number().optional(),
  email: z.string(),
  payment: z.string().optional(),
  status: z.number().int().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default ordersCreateManyInputSchema;
