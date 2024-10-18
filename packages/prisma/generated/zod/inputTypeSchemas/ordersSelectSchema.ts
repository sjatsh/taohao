import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsArgsSchema } from "../outputTypeSchemas/productsArgsSchema"

export const ordersSelectSchema: z.ZodType<Prisma.ordersSelect> = z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  num: z.boolean().optional(),
  price: z.boolean().optional(),
  email: z.boolean().optional(),
  payment: z.boolean().optional(),
  status: z.boolean().optional(),
  kami: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => productsArgsSchema)]).optional(),
}).strict()

export default ordersSelectSchema;
