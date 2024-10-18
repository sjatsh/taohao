import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { productsArgsSchema } from "../outputTypeSchemas/productsArgsSchema"

export const CreateManyordersAndReturnOutputTypeIncludeSchema: z.ZodType<Prisma.CreateManyordersAndReturnOutputTypeInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => productsArgsSchema)]).optional(),
}).strict()

export default CreateManyordersAndReturnOutputTypeIncludeSchema;
