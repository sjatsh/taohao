import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersFindManyArgsSchema } from "../outputTypeSchemas/ordersFindManyArgsSchema"
import { ProductsCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductsCountOutputTypeArgsSchema"

export const productsSelectSchema: z.ZodType<Prisma.productsSelect> = z.object({
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
  orders: z.union([z.boolean(),z.lazy(() => ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default productsSelectSchema;
