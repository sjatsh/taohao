import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ordersCreateWithoutProductInputSchema: z.ZodType<Prisma.ordersCreateWithoutProductInput> = z.object({
  order_id: z.string(),
  num: z.number().int().optional(),
  price: z.number().optional(),
  email: z.string(),
  payment: z.string().optional(),
  status: z.number().int().optional(),
  kami: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();

export default ordersCreateWithoutProductInputSchema;
