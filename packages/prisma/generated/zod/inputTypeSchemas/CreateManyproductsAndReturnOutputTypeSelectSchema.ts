import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CreateManyproductsAndReturnOutputTypeSelectSchema: z.ZodType<Prisma.CreateManyproductsAndReturnOutputTypeSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  num: z.boolean().optional(),
  price: z.boolean().optional(),
  origin_price: z.boolean().optional(),
  image: z.boolean().optional(),
  content: z.boolean().optional(),
  pay_type: z.boolean().optional(),
  kami: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  keywords: z.boolean().optional(),
}).strict()

export default CreateManyproductsAndReturnOutputTypeSelectSchema;
