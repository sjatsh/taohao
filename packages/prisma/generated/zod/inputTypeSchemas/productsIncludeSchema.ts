import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersFindManyArgsSchema } from "../outputTypeSchemas/ordersFindManyArgsSchema"
import { ProductsCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductsCountOutputTypeArgsSchema"

export const productsIncludeSchema: z.ZodType<Prisma.productsInclude> = z.object({
  orders: z.union([z.boolean(),z.lazy(() => ordersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default productsIncludeSchema;
