import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const productsCreateManyInputSchema: z.ZodType<Prisma.productsCreateManyInput> = z.object({
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
  updated_at: z.coerce.date().optional()
}).strict();

export default productsCreateManyInputSchema;
