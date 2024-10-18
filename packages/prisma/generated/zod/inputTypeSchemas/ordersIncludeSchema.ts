import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsArgsSchema } from "../outputTypeSchemas/productsArgsSchema"

export const ordersIncludeSchema: z.ZodType<Prisma.ordersInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => productsArgsSchema)]).optional(),
}).strict()

export default ordersIncludeSchema;
