import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ordersCreateManyProductInputSchema: z.ZodType<Prisma.ordersCreateManyProductInput> = z.object({
  id: z.number().int().optional(),
  order_id: z.string(),
  num: z.number().int(),
  price: z.number().optional(),
  email: z.string(),
  payment: z.string().optional(),
  status: z.number().int().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default ordersCreateManyProductInputSchema;
