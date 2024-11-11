import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const productsCreateWithoutOrdersInputSchema: z.ZodType<Prisma.productsCreateWithoutOrdersInput> = z.object({
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
  keywords: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict();

export default productsCreateWithoutOrdersInputSchema;
